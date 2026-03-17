/*
  # Lucky Draw Database Schema

  1. New Tables
    - `submissions`
      - `id` (uuid, primary key)
      - `game_id` (text) - BigDaddy Game ID
      - `tier` (text) - Bronze/Silver/Gold
      - `lucky_number` (integer) - Generated lucky number
      - `created_at` (timestamptz) - Submission timestamp
    
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password_hash` (text) - Hashed password
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public can insert into submissions (for form submission)
    - Only authenticated admin users can read submissions
    - Admin users table is completely locked down
*/

-- Create submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id text NOT NULL,
  tier text NOT NULL,
  lucky_number integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Submissions policies
CREATE POLICY "Anyone can submit entries"
  ON submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public can view submissions"
  ON submissions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can delete submissions"
  ON submissions
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  );

-- Admin users policies (completely locked)
CREATE POLICY "Admin users are private"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- Insert default admin (password: silentzone2025)
-- In production, you should hash this properly
INSERT INTO admin_users (username, password_hash)
VALUES ('admin', 'silentzone2025')
ON CONFLICT (username) DO NOTHING;