export interface Submission {
  id: string;
  game_id: string;
  tier: string;
  lucky_number: number;
  created_at: string;
}

export type Tier = 'Bronze' | 'Silver' | 'Gold';
