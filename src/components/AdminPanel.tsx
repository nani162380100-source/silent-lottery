import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Submission } from '../types';

export function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setSubmissions(data || []);
    } catch (err) {
      console.error('Error loading submissions:', err);
      setError('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [isAuthenticated]);

  const handleUnlock = async () => {
    setError('');

    try {
      const { data, error: queryError } = await supabase
        .from('admin_users')
        .select('password_hash')
        .eq('username', 'admin')
        .single();

      if (queryError) throw queryError;

      if (data && data.password_hash === password) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        setError('Wrong password');
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError('Authentication failed');
    }
  };

  const handleClearAll = async () => {
    if (!confirm('Clear ALL entries? This cannot be undone.')) return;

    try {
      const { error: deleteError } = await supabase
        .from('submissions')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');

      if (deleteError) throw deleteError;

      setSubmissions([]);
      alert('All entries cleared');
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to clear entries');
    }
  };

  const handleExportCSV = () => {
    if (!submissions.length) {
      alert('No entries to export');
      return;
    }

    let csv = 'No,Game ID,Tier,Lucky Number,Submitted At\n';
    submissions.forEach((entry, i) => {
      const date = new Date(entry.created_at).toLocaleString('en-IN');
      csv += `${i + 1},"${entry.game_id}","${entry.tier}",${entry.lucky_number},"${date}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `silentzone_entries_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent border border-[rgba(255,215,0,0.2)] text-[rgba(240,230,200,0.55)] font-cinzel text-[0.65rem] tracking-[0.3em] uppercase px-4 py-2 rounded-3xl cursor-pointer transition-all hover:border-[#B8860B] hover:text-[#B8860B]"
      >
        ⚙ Admin Access
      </button>

      {isOpen && (
        <div className="bg-[#111118] border border-[rgba(255,215,0,0.3)] rounded-2xl p-7 mt-4 max-w-5xl mx-auto">
          <div className="font-cinzel text-sm tracking-[0.3em] uppercase text-[#FFD700] mb-4">
            🔐 Admin — Submissions Log
          </div>

          {!isAuthenticated ? (
            <div>
              <div className="flex gap-2.5 mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  placeholder="Enter admin password"
                  className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,215,0,0.2)] rounded-lg px-3.5 py-2.5 text-[#F0E6C8] font-raleway text-sm outline-none"
                />
                <button
                  onClick={handleUnlock}
                  className="bg-[rgba(255,215,0,0.15)] border border-[rgba(255,215,0,0.25)] text-[#FFD700] font-cinzel text-xs tracking-wider px-4 py-2.5 rounded-lg cursor-pointer transition-all hover:bg-[rgba(255,215,0,0.25)]"
                >
                  Unlock
                </button>
              </div>
              {error && (
                <div className="text-sm text-[#FF9999] mb-2">{error}</div>
              )}
            </div>
          ) : (
            <div>
              {loading ? (
                <div className="text-center text-[rgba(240,230,200,0.55)] py-6">
                  Loading...
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr>
                          <th className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[#B8860B] px-3 py-2.5 border-b border-[rgba(255,215,0,0.25)] text-left whitespace-nowrap">
                            #
                          </th>
                          <th className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[#B8860B] px-3 py-2.5 border-b border-[rgba(255,215,0,0.25)] text-left whitespace-nowrap">
                            Game ID
                          </th>
                          <th className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[#B8860B] px-3 py-2.5 border-b border-[rgba(255,215,0,0.25)] text-left whitespace-nowrap">
                            Tier
                          </th>
                          <th className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[#B8860B] px-3 py-2.5 border-b border-[rgba(255,215,0,0.25)] text-left whitespace-nowrap">
                            Lucky Number
                          </th>
                          <th className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[#B8860B] px-3 py-2.5 border-b border-[rgba(255,215,0,0.25)] text-left whitespace-nowrap">
                            Submitted At
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {submissions.length === 0 ? (
                          <tr>
                            <td
                              colSpan={5}
                              className="text-center text-[rgba(240,230,200,0.55)] text-sm py-6"
                            >
                              No submissions yet.
                            </td>
                          </tr>
                        ) : (
                          submissions.map((entry, i) => (
                            <tr
                              key={entry.id}
                              className="hover:bg-[rgba(255,215,0,0.03)]"
                            >
                              <td className="px-3 py-2.5 border-b border-[rgba(255,255,255,0.04)] text-[#F0E6C8]">
                                {i + 1}
                              </td>
                              <td className="px-3 py-2.5 border-b border-[rgba(255,255,255,0.04)] text-[#F0E6C8]">
                                {entry.game_id}
                              </td>
                              <td className="px-3 py-2.5 border-b border-[rgba(255,255,255,0.04)] text-[#F0E6C8]">
                                {entry.tier}
                              </td>
                              <td className="px-3 py-2.5 border-b border-[rgba(255,255,255,0.04)] font-cinzel text-[#FFD700] font-bold">
                                {entry.lucky_number}
                              </td>
                              <td className="px-3 py-2.5 border-b border-[rgba(255,255,255,0.04)] text-[rgba(240,230,200,0.55)] text-xs">
                                {new Date(entry.created_at).toLocaleString(
                                  'en-IN'
                                )}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex gap-2.5 justify-center">
                    <button
                      onClick={handleClearAll}
                      className="bg-[rgba(192,57,43,0.15)] border border-[rgba(192,57,43,0.4)] text-[#FF9999] font-cinzel text-xs tracking-wider px-4 py-2 rounded-md cursor-pointer transition-all hover:bg-[rgba(192,57,43,0.3)]"
                    >
                      🗑 Clear All Entries
                    </button>
                    <button
                      onClick={handleExportCSV}
                      className="bg-[rgba(46,204,113,0.12)] border border-[rgba(46,204,113,0.3)] text-[#2ECC71] font-cinzel text-xs tracking-wider px-4 py-2 rounded-md cursor-pointer transition-all hover:bg-[rgba(46,204,113,0.25)]"
                    >
                      📥 Export CSV
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
