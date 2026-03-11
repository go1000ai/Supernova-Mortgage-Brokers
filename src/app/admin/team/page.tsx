'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Plus, Pencil, Trash2, X, Check, LogOut, GripVertical, Upload } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  order: number;
}

const EMPTY: Omit<TeamMember, 'id' | 'order'> = {
  name: '', title: '', bio: '', image: '', email: '', phone: '',
};

export default function AdminTeamPage() {
  const router = useRouter();
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ ...EMPTY });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadTeam = async () => {
    const res = await fetch('/api/team');
    if (res.status === 401) { router.push('/admin'); return; }
    const data = await res.json();
    setTeam(data);
    setLoading(false);
  };

  useEffect(() => { loadTeam(); }, []);

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin');
  };

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview('');
    }
  };

  const startEdit = (member: TeamMember) => {
    setEditingId(member.id);
    setForm({
      name: member.name, title: member.title, bio: member.bio,
      image: member.image, email: member.email ?? '', phone: member.phone ?? '',
    });
    setImageFile(null);
    setImagePreview('');
    setShowAdd(false);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setShowAdd(false);
    setForm({ ...EMPTY });
    setImageFile(null);
    setImagePreview('');
  };

  const submitAdd = async () => {
    if (!form.name || !form.title || !form.bio) {
      showToast('Name, title, and bio are required.', 'error');
      return;
    }
    setSaving(true);
    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('title', form.title);
    fd.append('bio', form.bio);
    fd.append('email', form.email ?? '');
    fd.append('phone', form.phone ?? '');
    if (imageFile) fd.append('image', imageFile);

    const res = await fetch('/api/team', { method: 'POST', body: fd });
    if (res.ok) {
      showToast('Team member added!');
      cancelEdit();
      loadTeam();
    } else {
      const err = await res.json();
      showToast(err.error ?? 'Failed to add member', 'error');
    }
    setSaving(false);
  };

  const submitEdit = async () => {
    if (!form.name || !form.title || !form.bio) {
      showToast('Name, title, and bio are required.', 'error');
      return;
    }
    setSaving(true);
    const fd = new FormData();
    fd.append('id', editingId!);
    fd.append('name', form.name);
    fd.append('title', form.title);
    fd.append('bio', form.bio);
    fd.append('email', form.email ?? '');
    fd.append('phone', form.phone ?? '');
    fd.append('currentImage', form.image);
    if (imageFile) fd.append('image', imageFile);

    const res = await fetch('/api/team', { method: 'PUT', body: fd });
    if (res.ok) {
      showToast('Member updated!');
      cancelEdit();
      loadTeam();
    } else {
      showToast('Failed to update', 'error');
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    setSaving(true);
    const res = await fetch('/api/team', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      showToast('Member removed.');
      setDeleteConfirm(null);
      loadTeam();
    } else {
      showToast('Failed to delete', 'error');
    }
    setSaving(false);
  };

  const FormFields = () => (
    <div className="space-y-4">
      {/* Image Upload */}
      <div>
        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Photo</label>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-black/30 border border-[#d29e4a]/20 flex-shrink-0">
            {(imagePreview || form.image) ? (
              <Image
                src={imagePreview || form.image}
                alt="Preview"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">No photo</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d29e4a]/10 border border-[#d29e4a]/30 text-[#d29e4a] text-sm hover:bg-[#d29e4a]/20 transition-colors"
            >
              <Upload className="w-4 h-4" />
              Upload Photo
            </button>
            {(imagePreview || form.image) && (
              <button
                type="button"
                onClick={() => { setImageFile(null); setImagePreview(''); setForm(f => ({ ...f, image: '' })); }}
                className="text-xs text-red-400 hover:text-red-300 text-left"
              >
                Remove photo
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => handleImageChange(e.target.files?.[0] ?? null)}
            />
          </div>
        </div>
        <p className="text-xs text-white/30 mt-2">Or paste a direct image URL below:</p>
        <input
          type="text"
          placeholder="https://... (optional if uploading a file)"
          value={imageFile ? '' : form.image}
          onChange={e => { setForm(f => ({ ...f, image: e.target.value })); setImageFile(null); setImagePreview(''); }}
          className="mt-1 w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Full Name *</label>
          <input
            type="text"
            placeholder="e.g. Jorge Diaz"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Job Title *</label>
          <input
            type="text"
            placeholder="e.g. Senior Mortgage Broker"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            className="w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Bio *</label>
        <textarea
          placeholder="Write a short bio for this team member..."
          value={form.bio}
          onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
          rows={4}
          className="w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Phone</label>
          <input
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            className="w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a1f1a] text-white">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl text-sm font-medium transition-all ${
          toast.type === 'success'
            ? 'bg-[#0e2922] border border-[#d29e4a]/30 text-[#d29e4a]'
            : 'bg-red-900/80 border border-red-500/30 text-red-300'
        }`}>
          {toast.type === 'success' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a1f1a]/90 backdrop-blur-xl border-b border-[#d29e4a]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-transparent.png" alt="Logo" width={36} height={36} />
            <div>
              <h1 className="text-sm font-bold text-white">Team Admin</h1>
              <p className="text-xs text-white/30">Supernova Mortgage Brokers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/team"
              target="_blank"
              className="hidden sm:flex text-xs text-white/40 hover:text-[#d29e4a] transition-colors"
            >
              View public page →
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Page Title + Add Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Team Members</h2>
            <p className="text-sm text-white/40 mt-1">{team.length} member{team.length !== 1 ? 's' : ''}</p>
          </div>
          {!showAdd && editingId === null && (
            <button
              onClick={() => { setShowAdd(true); setEditingId(null); setForm({ ...EMPTY }); setImageFile(null); setImagePreview(''); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold text-sm shadow-lg shadow-[#d29e4a]/20 hover:shadow-[#d29e4a]/40 transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Member
            </button>
          )}
        </div>

        {/* Add Form */}
        {showAdd && (
          <div className="mb-8 bg-gradient-to-b from-[#0e2922] to-[#0c2318] border border-[#d29e4a]/20 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#d29e4a]">Add New Member</h3>
              <button onClick={cancelEdit} className="text-white/40 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FormFields />
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#d29e4a]/10">
              <button
                onClick={submitAdd}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold text-sm disabled:opacity-60"
              >
                <Check className="w-4 h-4" />
                {saving ? 'Saving…' : 'Add Member'}
              </button>
              <button onClick={cancelEdit} className="px-6 py-2.5 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Team List */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 rounded-full border-2 border-[#d29e4a] border-t-transparent animate-spin" />
          </div>
        ) : team.length === 0 ? (
          <div className="text-center py-24 text-white/30">
            <p className="text-lg mb-4">No team members yet.</p>
            <button
              onClick={() => { setShowAdd(true); }}
              className="text-[#d29e4a] hover:text-[#e8c47a] transition-colors text-sm"
            >
              Add your first member →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {team.map(member => (
              <div
                key={member.id}
                className="bg-gradient-to-b from-[#0e2922] to-[#0c2318] border border-[#d29e4a]/10 rounded-2xl overflow-hidden"
              >
                {editingId === member.id ? (
                  /* Edit mode */
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-[#d29e4a]">Edit: {member.name}</h3>
                      <button onClick={cancelEdit} className="text-white/40 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <FormFields />
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#d29e4a]/10">
                      <button
                        onClick={submitEdit}
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold text-sm disabled:opacity-60"
                      >
                        <Check className="w-4 h-4" />
                        {saving ? 'Saving…' : 'Save Changes'}
                      </button>
                      <button onClick={cancelEdit} className="px-6 py-2.5 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  /* View mode */
                  <div className="flex items-start gap-4 p-5">
                    <GripVertical className="w-4 h-4 text-white/20 mt-1 flex-shrink-0 cursor-grab" />
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-black/30">
                      <Image
                        src={member.image || '/logo-transparent.png'}
                        alt={member.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                        unoptimized={member.image.startsWith('http')}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white truncate">{member.name}</h3>
                      <p className="text-sm text-[#d29e4a]">{member.title}</p>
                      <p className="text-xs text-white/40 mt-1 line-clamp-2">{member.bio}</p>
                      {(member.email || member.phone) && (
                        <div className="flex flex-wrap gap-3 mt-2">
                          {member.email && <span className="text-xs text-white/30">{member.email}</span>}
                          {member.phone && <span className="text-xs text-white/30">{member.phone}</span>}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => startEdit(member)}
                        className="p-2 rounded-lg text-white/40 hover:text-[#d29e4a] hover:bg-[#d29e4a]/10 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      {deleteConfirm === member.id ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDelete(member.id)}
                            disabled={saving}
                            className="px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-500/30 transition-colors disabled:opacity-60"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="p-1.5 text-white/30 hover:text-white transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(member.id)}
                          className="p-2 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
