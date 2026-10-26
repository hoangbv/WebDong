import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  lang: 'en' | 'vi';
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  lang,
}) => {
  const { content } = useContent();
  const { contactInfo, brandName } = content;
  const [platform, setPlatform] = useState('Facebook BM');
  const [budget, setBudget] = useState(preselectedService || '$3,000 - $10,000 / day (5% Charge)');
  const [telegramOrWa, setTelegramOrWa] = useState('');
  const [niche, setNiche] = useState('White Hat');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!telegramOrWa) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden transition-colors">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff7a00]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Order Registered!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Your account request for <strong>{platform}</strong> ({budget}) is ready for immediate VPS handover.
            </p>
            <div className="pt-3 space-y-2 notranslate">
              <a
                href={`${contactInfo.whatsapp}?text=Hello%20${encodeURIComponent(brandName)},%20I%20want%20to%20rent%20${encodeURIComponent(platform)}%20(${encodeURIComponent(budget)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp ({contactInfo.whatsappNumber}) to Receive Account</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff7a00]/15 text-[#ff7a00] text-[11px] font-bold uppercase tracking-wider mb-2">
                <Zap className="w-3 h-3" />
                <span>10-Minute Delivery Guarantee</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Rent Agency Ad Account
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Configure your setup and get ready-to-run credentials immediately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Facebook Service Asset
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Facebook BM', 'Fanpage Kháng', 'Facebook Invoice'].map((plat) => (
                    <button
                      key={plat}
                      type="button"
                      onClick={() => setPlatform(`${plat}`)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        platform.includes(plat)
                          ? 'bg-[#ff7a00] text-white border-[#ff7a00] shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Budget / Plan
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                >
                  <option value="$1,000 - $2,999 / day (6% Charge)">Facebook Tier 1: $1,000 - $2,999 / day (6% Charge)</option>
                  <option value="$3,000 - $10,000 / day (5% Charge)">Facebook Tier 2: $3,000 - $10,000 / day (5% Charge)</option>
                  <option value="$10,000+ / day (Negotiable VIP)">Facebook Tier 3: $10,000+ / day (Negotiable VIP)</option>
                  <option value="Threshold Program (4% Fee & $450 Bonus)">Special Threshold Program (4% Fee & $450 Profit)</option>
                  <option value="Strong Aged Fanpage Kháng + Pixel Setup">Strong Aged Fanpage Kháng + Pixel Setup</option>
                  <option value="Personal Facebook Account (15% Charge)">Personal Facebook Account (15% Charge)</option>
                  <option value="Facebook Invoice Account (20% Charge)">Facebook Invoice Account (20% Charge)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Your Telegram or WhatsApp Username *
                </label>
                <input
                  type="text"
                  required
                  placeholder="@your_telegram_id or +123456789"
                  value={telegramOrWa}
                  onChange={(e) => setTelegramOrWa(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#ff7a00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Product Vertical / Niche
                </label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#ff7a00] transition-colors"
                >
                  <option value="White Hat">White Hat (E-Commerce, Apps, Lead Gen)</option>
                  <option value="Black Hat">Black Hat (BH)</option>
                  <option value="Grey Hat">Grey Hat (GH)</option>
                  <option value="Crypto & NFT">Crypto, Web3 & NFT</option>
                  <option value="Gambling & Casino">Gambling & Casino</option>
                  <option value="Nutra & Weight Loss">Nutra & Weight Loss</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#ff7a00] to-[#e65c00] hover:from-[#ff8800] hover:to-[#ff6a00] text-white font-black rounded-xl text-xs shadow-lg shadow-[#ff7a00]/30 transition-all"
                >
                  Confirm & Receive Account in 10 Mins
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero % VAT • 100% Unspent Balance Refundable</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
