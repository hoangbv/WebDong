import React, { useState } from 'react';
import { Send, MessageCircle, Instagram, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface ContactSectionProps {
  lang: 'en' | 'vi';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrTg: '',
    subject: 'Facebook Agency Ad Account Rental',
    budget: '$1,000 - $3,000 / day',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.emailOrTg) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/60 dark:bg-gradient-to-b dark:from-[#0B0F19] dark:via-[#0d1324] dark:to-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-[#ff7a00]/10 border border-slate-300 dark:border-[#ff7a00]/30 text-[#ff7a00] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct VIP Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
            Contact us immediately to receive
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-amber-500 dark:to-amber-300 mt-1">
            special offers and thoughtful support
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base transition-colors">
            Reach out via your preferred messaging channel or submit a direct inquiry below. Response guaranteed within minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-4 transition-colors">
              <h4 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>Fast Direct Channels</span>
                <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  24/7 ONLINE
                </span>
              </h4>

              {/* Telegram Direct */}
              <a
                href={CONTACT_INFO.telegramDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/30 hover:border-[#229ED9] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#229ED9] text-white flex items-center justify-center shadow-md">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Telegram Direct (Fastest)</span>
                    <strong className="text-sm text-slate-900 dark:text-white group-hover:text-[#229ED9] transition-colors">
                      {CONTACT_INFO.telegramUser}
                    </strong>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#229ED9] group-hover:translate-x-1 transition-all" />
              </a>

              {/* Telegram Support Group */}
              <a
                href={CONTACT_INFO.telegramSupport}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#229ED9] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 text-[#229ED9] flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Telegram Support</span>
                    <strong className="text-sm text-slate-900 dark:text-white group-hover:text-[#229ED9] transition-colors">
                      {CONTACT_INFO.telegramSupportUser}
                    </strong>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#229ED9] group-hover:translate-x-1 transition-all" />
              </a>

              {/* Telegram Channel */}
              <a
                href={CONTACT_INFO.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#ff7a00] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff7a00]/15 text-[#ff7a00] flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Channel Telegram (Updates & Proofs)</span>
                    <strong className="text-sm text-slate-900 dark:text-white group-hover:text-[#ff7a00] transition-colors">
                      {CONTACT_INFO.telegramChannelUser}
                    </strong>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#ff7a00] group-hover:translate-x-1 transition-all" />
              </a>

              {/* WhatsApp */}
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">WhatsApp Official</span>
                    <strong className="text-sm text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {CONTACT_INFO.whatsappNumber}
                    </strong>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Instagram */}
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:border-purple-400 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Instagram Profile</span>
                    <strong className="text-sm text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
                      @g2agency_official
                    </strong>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* SLA badge */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-3 shadow-sm transition-colors">
              <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
              <span>
                Account preparation and credentials handover under 10 minutes upon budget confirmation.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive "Leave a Message" Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 shadow-xl dark:shadow-2xl relative transition-colors">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 mb-6">
                <div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">Leave a Message</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Fill out your advertising plan and our team will prepare your trial credentials.
                  </p>
                </div>
                <span className="text-xs text-[#ff7a00] font-bold">Fast Callback</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your request has been received. Our account manager is connecting via <strong>{formData.emailOrTg}</strong>.
                  </p>
                  <div className="pt-4">
                    <a
                      href={CONTACT_INFO.telegramDirect}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#229ED9] hover:bg-[#229ED9]/90 text-white font-extrabold rounded-xl text-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Ping on Telegram @G2_agency007 for Instant Approval</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Media Buyer"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#ff7a00] focus:bg-white dark:focus:bg-slate-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Email or Telegram / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.emailOrTg}
                        onChange={(e) => setFormData({ ...formData, emailOrTg: e.target.value })}
                        placeholder="@username or email"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#ff7a00] focus:bg-white dark:focus:bg-slate-950 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Service Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                      >
                        <option value="Facebook Agency Ad Account Rental">Facebook Agency Ad Account Rental</option>
                        <option value="Aged Fanpage Kháng & Pixel Setup">Aged Fanpage Kháng & Pixel Setup</option>
                        <option value="Facebook BM Agency Nolimit">Facebook BM Agency Nolimit</option>
                        <option value="Threshold Program (4% Fee & $450 Bonus)">Threshold Program (4% Fee & $450 Bonus)</option>
                        <option value="Personal Facebook Account (15%)">Personal Facebook Account (15%)</option>
                        <option value="Facebook Invoice Account (20%)">Facebook Invoice Account (20%)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Planned Daily Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                      >
                        <option value="$1,000 - $2,999 / day (6% Charge)">$1,000 - $2,999 / day (6% Charge)</option>
                        <option value="$3,000 - $10,000 / day (5% Charge)">$3,000 - $10,000 / day (5% Charge)</option>
                        <option value="$10,000+ / day (Negotiable VIP)">$10,000+ / day (Negotiable VIP)</option>
                        <option value="Under $1,000 / day (Trial)">Under $1,000 / day (Trial)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                      Your Message (Niche / Verticals / Specific Requirements)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what vertical you are running (Crypto, Casino, Nutra, E-com, etc.) and proxy preference (VPS/AdsPower)..."
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#ff7a00] focus:bg-white dark:focus:bg-slate-950 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#ff7a00] to-[#e65c00] hover:from-[#ff8800] hover:to-[#ff6a00] text-white font-black rounded-xl text-sm shadow-xl shadow-[#ff7a00]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message & Reserve Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
