'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Navbar from '@/components/navbar';
import Image from 'next/image';

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

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/team')
      .then(r => r.json())
      .then(data => { setTeam(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1f1a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2922] to-[#0a1f1a]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d29e4a 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4"
          >
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            The People Behind{' '}
            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
              Your Journey
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            Meet the dedicated professionals who work every day to make your homeownership dream a reality.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-12 h-12 rounded-full border-2 border-[#d29e4a] border-t-transparent animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative bg-gradient-to-b from-[#0e2922] to-[#0c2318] border border-[#d29e4a]/10 rounded-3xl overflow-hidden hover:border-[#d29e4a]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d29e4a]/10"
                >
                  {/* Photo */}
                  <div className="relative h-72 overflow-hidden bg-[#0c2318]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      unoptimized={member.image.startsWith('http')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2922] via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-[#d29e4a] mb-4">{member.title}</p>
                    <p className="text-sm text-white/50 leading-relaxed mb-6">{member.bio}</p>

                    {(member.email || member.phone) && (
                      <div className="border-t border-[#d29e4a]/10 pt-4 space-y-2">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2 text-xs text-white/40 hover:text-[#d29e4a] transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            {member.email}
                          </a>
                        )}
                        {member.phone && (
                          <a
                            href={`tel:${member.phone.replace(/\D/g, '')}`}
                            className="flex items-center gap-2 text-xs text-white/40 hover:text-[#d29e4a] transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            {member.phone}
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Gold accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d29e4a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-[#d29e4a]/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-white/50 mb-8">Our team is ready to help you find the perfect mortgage solution.</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold text-sm shadow-lg shadow-[#d29e4a]/25 hover:shadow-[#d29e4a]/40 hover:-translate-y-0.5 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-white/5">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Supernova Mortgage Brokers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
