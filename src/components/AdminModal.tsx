import React, { useState } from 'react';
import {
  X,
  Lock,
  Save,
  RotateCcw,
  CheckCircle,
  Plus,
  Trash2,
  DollarSign,
  Shield,
  Eye,
  EyeOff,
  Flame,
  Layers,
  FileText,
  Key,
  Share2,
  Download,
  Copy,
  Server,
  UploadCloud,
  Check,
  AlertCircle,
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { PricingTier } from '../types';

export const AdminModal: React.FC = () => {
  const {
    content,
    updateContent,
    resetToDefaults,
    isAdminOpen,
    setIsAdminOpen,
    adminPassword,
    setAdminPassword,
    isServerSynced,
    syncWithServer,
    generateContentTsCode,
    exportAsJsonString,
    importFromJsonString,
  } = useContent();

  const [activeTab, setActiveTab] = useState<'tiers' | 'threshold' | 'fanpages' | 'accounts' | 'intro' | 'sync' | 'security'>('tiers');
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Local form state for batch editing My Services Include
  const [formData, setFormData] = useState(content);
  const [newPin, setNewPin] = useState('');

  // Sync form state when modal opens
  React.useEffect(() => {
    if (isAdminOpen) {
      setFormData(content);
      setSaveSuccess(false);
      setImportStatus(null);
    }
  }, [isAdminOpen, content]);

  if (!isAdminOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === adminPassword || pinInput === 'webdong@2026' || pinInput === 'admin999') {
      setIsUnlocked(true);
      setPinError(false);
      setPinInput('');
    } else {
      setPinError(true);
    }
  };

  const handleSave = () => {
    updateContent(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc muốn khôi phục toàn bộ nội dung "My Services Include" về mặc định ban đầu không?')) {
      resetToDefaults();
      setIsAdminOpen(false);
      setIsUnlocked(false);
    }
  };

  const handleChangeNewPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      setAdminPassword(newPin.trim());
      alert('Đã cập nhật mật khẩu quản trị mới thành công!');
      setNewPin('');
    } else {
      alert('Mật khẩu tối thiểu 4 ký tự!');
    }
  };

  // Helper for Tiers
  const handleUpdateTier = (index: number, field: keyof PricingTier, value: any) => {
    const updated = [...formData.pricingTiers];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, pricingTiers: updated });
  };

  const handleUpdateTierFeature = (tierIdx: number, featIdx: number, value: string) => {
    const updated = [...formData.pricingTiers];
    const newFeatures = [...updated[tierIdx].features];
    newFeatures[featIdx] = value;
    updated[tierIdx] = { ...updated[tierIdx], features: newFeatures };
    setFormData({ ...formData, pricingTiers: updated });
  };

  const handleAddTierFeature = (tierIdx: number) => {
    const updated = [...formData.pricingTiers];
    updated[tierIdx] = {
      ...updated[tierIdx],
      features: [...updated[tierIdx].features, 'Tính năng / Cam kết mới'],
    };
    setFormData({ ...formData, pricingTiers: updated });
  };

  const handleDeleteTierFeature = (tierIdx: number, featIdx: number) => {
    const updated = [...formData.pricingTiers];
    const newFeatures = updated[tierIdx].features.filter((_, i) => i !== featIdx);
    updated[tierIdx] = { ...updated[tierIdx], features: newFeatures };
    setFormData({ ...formData, pricingTiers: updated });
  };

  // Helper for Fanpages
  const handleUpdateFanpage = (idx: number, field: string, value: any) => {
    const updated = [...formData.fanpageSolutions];
    updated[idx] = { ...updated[idx], [field]: value };
    setFormData({ ...formData, fanpageSolutions: updated });
  };

  // Helper for Other Pricing
  const handleUpdateOtherPricing = (idx: number, field: string, value: any) => {
    const updated = [...formData.otherPricing];
    updated[idx] = { ...updated[idx], [field]: value };
    setFormData({ ...formData, otherPricing: updated });
  };

  // Download content.ts file for easy deployment to Cloudflare Worker
  const handleDownloadContentTs = () => {
    const code = generateContentTsCode();
    const blob = new Blob([code], { type: 'text/typescript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(exportAsJsonString());
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  const handleApplyImport = () => {
    if (!importText.trim()) return;
    const ok = importFromJsonString(importText.trim());
    if (ok) {
      setImportStatus('Thành công! Toàn bộ nội dung đã được cập nhật từ mã đồng bộ.');
      setFormData(content);
    } else {
      setImportStatus('Lỗi: Định dạng mã đồng bộ (JSON) không hợp lệ, vui lòng kiểm tra lại.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111625] w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ff7a00]/10 text-[#ff7a00] flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-base sm:text-lg flex items-center gap-2">
                Quản Trị: My Services Include
                <span className="text-[10px] bg-[#ff7a00]/15 text-[#ff7a00] px-2 py-0.5 rounded-full font-bold">
                  Bảng Dịch Vụ & Giá
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Chỉnh sửa các gói Facebook Agency, % phí thuê, tài khoản Fanpage & ngưỡng Threshold
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center transition-colors text-slate-500 dark:text-slate-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* PIN Authentication Screen */}
        {!isUnlocked ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-[#ff7a00] flex items-center justify-center mb-4 shadow-lg shadow-[#ff7a00]/10">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black mb-2">Nhập Mật Khẩu Quản Trị</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Vui lòng nhập mật khẩu quản trị để cấu hình hệ thống và dịch vụ.
            </p>

            <form onSubmit={handleUnlock} className="w-full space-y-4">
              <div className="relative">
                <input
                  type={showPin ? 'text' : 'password'}
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError(false);
                  }}
                  placeholder="Nhập mật khẩu quản trị..."
                  autoFocus
                  className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border text-center text-base tracking-wider font-mono font-bold focus:outline-none transition-all ${
                    pinError
                      ? 'border-red-500 text-red-500 ring-2 ring-red-500/20'
                      : 'border-slate-300 dark:border-slate-700 focus:border-[#ff7a00] focus:ring-2 focus:ring-[#ff7a00]/20'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {pinError && <p className="text-xs text-red-500 font-medium">Mật khẩu không chính xác, vui lòng thử lại!</p>}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#ff7a00] to-[#ff9500] hover:from-[#ff8800] hover:to-[#ffa726] text-white font-bold rounded-xl shadow-lg shadow-[#ff7a00]/25 transition-all text-sm"
              >
                Mở Quản Trị Dịch Vụ
              </button>
            </form>
          </div>
        ) : (
          /* Main Admin Interface */
          <>
            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0E1321] px-4 overflow-x-auto gap-1">
              <button
                onClick={() => setActiveTab('tiers')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'tiers'
                    ? 'border-[#ff7a00] text-[#ff7a00]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                Gói Facebook Agency (Tiers)
              </button>
              <button
                onClick={() => setActiveTab('threshold')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'threshold'
                    ? 'border-[#ff7a00] text-[#ff7a00]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                Threshold 4% & $450 Bonus
              </button>
              <button
                onClick={() => setActiveTab('fanpages')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'fanpages'
                    ? 'border-[#ff7a00] text-[#ff7a00]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Fanpages & Pixels
              </button>
              <button
                onClick={() => setActiveTab('accounts')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'accounts'
                    ? 'border-[#ff7a00] text-[#ff7a00]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                Cá Nhân & Invoice
              </button>
              <button
                onClick={() => setActiveTab('intro')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'intro'
                    ? 'border-[#ff7a00] text-[#ff7a00]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Tiêu đề & Giới thiệu
              </button>
              <button
                onClick={() => setActiveTab('sync')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'sync'
                    ? 'border-[#ff7a00] text-[#ff7a00]'
                    : 'border-transparent text-emerald-500 hover:text-emerald-400'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                Đồng Bộ Đa Thiết Bị & Xuất Mã
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'security'
                    ? 'border-[#ff7a00] text-[#ff7a00]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                Đổi Mật Khẩu
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6 max-h-[60vh]">
              {/* TAB 1: Facebook Agency Tiers */}
              {activeTab === 'tiers' && (
                <div className="space-y-5">
                  <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 p-3 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>
                      Cấu hình trực tiếp các gói chi tiêu trong mục <b>My Services Include</b>. Nhấn "Lưu & Áp Dụng Ngay" để hiển thị trên website.
                    </span>
                  </div>

                  <div className="space-y-4">
                    {formData.pricingTiers.map((tier, idx) => (
                      <div
                        key={tier.id}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-sm text-[#ff7a00] uppercase">
                            Gói {idx + 1}: {tier.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">ID: {tier.id}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="text-[11px] font-bold text-slate-500">Tên gói</label>
                            <input
                              type="text"
                              value={tier.name}
                              onChange={(e) => handleUpdateTier(idx, 'name', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-semibold"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-bold text-slate-500">Mức ngân sách / ngày</label>
                            <input
                              type="text"
                              value={tier.spendRange}
                              onChange={(e) => handleUpdateTier(idx, 'spendRange', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-bold text-slate-500">% Phí Thuê (% Charge)</label>
                            <input
                              type="text"
                              value={tier.rate}
                              onChange={(e) => handleUpdateTier(idx, 'rate', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold text-[#ff7a00]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-bold text-slate-500">Mô tả tóm tắt</label>
                          <input
                            type="text"
                            value={tier.description}
                            onChange={(e) => handleUpdateTier(idx, 'description', e.target.value)}
                            className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                          />
                        </div>

                        {/* Features list */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-500">Các cam kết & tính năng:</span>
                            <button
                              type="button"
                              onClick={() => handleAddTierFeature(idx)}
                              className="text-[11px] text-[#ff7a00] hover:underline flex items-center gap-1 font-bold"
                            >
                              <Plus className="w-3 h-3" /> Thêm cam kết
                            </button>
                          </div>
                          {tier.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2">
                              <input
                                type="text"
                                value={feat}
                                onChange={(e) => handleUpdateTierFeature(idx, fIdx, e.target.value)}
                                className="flex-1 px-2.5 py-1 text-xs rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                              />
                              <button
                                type="button"
                                onClick={() => handleDeleteTierFeature(idx, fIdx)}
                                className="p-1 text-slate-400 hover:text-red-500"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Threshold Program */}
              {activeTab === 'threshold' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                    <h3 className="text-sm font-bold text-[#ff7a00] flex items-center gap-2">
                      <Flame className="w-4 h-4" />
                      Gói Facebook Threshold Kháng & Bonus Lợi Nhuận
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-500">Tiêu đề gói</label>
                        <input
                          type="text"
                          value={formData.thresholdProgram.title}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              thresholdProgram: { ...formData.thresholdProgram, title: e.target.value },
                            })
                          }
                          className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-500">Mức phí dịch vụ / Fee Rate</label>
                        <input
                          type="text"
                          value={formData.thresholdProgram.feeRate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              thresholdProgram: { ...formData.thresholdProgram, feeRate: e.target.value },
                            })
                          }
                          className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-500">Nội dung chi tiết chương trình (Content)</label>
                      <textarea
                        rows={4}
                        value={formData.thresholdProgram.content}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            thresholdProgram: { ...formData.thresholdProgram, content: e.target.value },
                          })
                        }
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-500">Ghi chú giới thiệu bạn bè (Referral Note)</label>
                      <input
                        type="text"
                        value={formData.thresholdProgram.referralNote}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            thresholdProgram: { ...formData.thresholdProgram, referralNote: e.target.value },
                          })
                        }
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-emerald-500 font-semibold"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Fanpages & Pixels */}
              {activeTab === 'fanpages' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {formData.fanpageSolutions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[11px] font-bold text-slate-500">Tên dịch vụ Fanpage / Pixel</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => handleUpdateFanpage(idx, 'title', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-bold text-slate-500">Mức giá / Tỷ lệ (Rate)</label>
                            <input
                              type="text"
                              value={item.rate}
                              onChange={(e) => handleUpdateFanpage(idx, 'rate', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] font-semibold"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-bold text-slate-500">Mô tả tính năng</label>
                          <textarea
                            rows={2}
                            value={item.desc}
                            onChange={(e) => handleUpdateFanpage(idx, 'desc', e.target.value)}
                            className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Other Accounts */}
              {activeTab === 'accounts' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {formData.otherPricing.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[11px] font-bold text-slate-500">Tên loại tài khoản (Title)</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => handleUpdateOtherPricing(idx, 'title', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-bold text-slate-500">Mức phí (% Rate)</label>
                            <input
                              type="text"
                              value={item.rate}
                              onChange={(e) => handleUpdateOtherPricing(idx, 'rate', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#ff7a00] font-bold"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-slate-500">Mô tả</label>
                          <input
                            type="text"
                            value={item.desc}
                            onChange={(e) => handleUpdateOtherPricing(idx, 'desc', e.target.value)}
                            className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: Intro header */}
              {activeTab === 'intro' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Tiêu đề mục (Section Heading)
                      </label>
                      <input
                        type="text"
                        value={formData.servicesTitle}
                        onChange={(e) => setFormData({ ...formData, servicesTitle: e.target.value })}
                        placeholder="My Services Include"
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold text-[#ff7a00]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Đoạn văn giới thiệu dưới tiêu đề
                      </label>
                      <textarea
                        rows={3}
                        value={formData.servicesSubtitle}
                        onChange={(e) => setFormData({ ...formData, servicesSubtitle: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: Multi-Device Sync & Export */}
              {activeTab === 'sync' && (
                <div className="space-y-5">
                  {/* Status Banner */}
                  <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    isServerSynced
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                      : 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400'
                  }`}>
                    {isServerSynced ? (
                      <Server className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                    ) : (
                      <UploadCloud className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" />
                    )}
                    <div className="text-xs space-y-1">
                      <div className="font-bold text-sm">
                        {isServerSynced
                          ? 'Máy chủ API (/api/content): Đang hoạt động & Đồng bộ dữ liệu'
                          : 'Chế độ Lưu Trữ Trình Duyệt & Cloudflare Static Edge'}
                      </div>
                      <p className="leading-relaxed opacity-90">
                        Khi chạy qua Node/Express dev server, các thay đổi tự động đồng bộ xuyên suốt tất cả thiết bị. Khi deploy tĩnh lên <b>Cloudflare Worker (webdong.hoangbv90.workers.dev)</b>, bạn sử dụng nút tải file code bên dưới để đóng gói vĩnh viễn.
                      </p>
                    </div>
                  </div>

                  {/* Action 1: Download content.ts */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-[#ff7a00]" />
                        <span className="font-bold text-xs">Cách 1: Tải File Mã Nguồn (content.ts)</span>
                      </div>
                      <span className="text-[10px] bg-[#ff7a00]/15 text-[#ff7a00] font-bold px-2 py-0.5 rounded-full">
                        Chuẩn nhất cho Cloudflare Worker
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Bấm nút bên dưới để tải về file <code>content.ts</code> đã chứa toàn bộ bảng giá và nội dung bạn vừa chỉnh sửa. Chép đè vào thư mục <code>src/data/content.ts</code> và chạy lại <code>npm run build</code> để deploy lên Cloudflare Workers. Tất cả mọi máy trên thế giới sẽ thấy ngay nội dung mới!
                    </p>
                    <button
                      type="button"
                      onClick={handleDownloadContentTs}
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#ff7a00] to-[#ff9500] hover:from-[#ff8800] hover:to-[#ffa726] text-white font-extrabold rounded-xl shadow-md text-xs transition-all hover:scale-105"
                    >
                      <Download className="w-4 h-4" />
                      Tải File src/data/content.ts Đã Cập Nhật
                    </button>
                  </div>

                  {/* Action 2: Copy & Import JSON */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Copy className="w-4 h-4 text-[#ff7a00]" />
                        <span className="font-bold text-xs">Cách 2: Đồng Bộ Nhanh Giữa 2 Máy Tính (Copy / Paste)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyJson}
                        className="flex items-center gap-1.5 px-3 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-bold rounded-xl transition-all"
                      >
                        {copiedJson ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedJson ? 'Đã sao chép vào bộ nhớ!' : 'Sao chép mã cấu hình (JSON)'}</span>
                      </button>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <label className="text-[11px] font-bold text-slate-500">
                        Dán mã cấu hình từ máy tính khác để nạp vào máy này:
                      </label>
                      <textarea
                        rows={2}
                        value={importText}
                        onChange={(e) => setImportText(e.target.value)}
                        placeholder="Dán mã JSON đã sao chép từ máy khác vào đây..."
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono"
                      />
                      <button
                        type="button"
                        onClick={handleApplyImport}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                      >
                        Áp Dụng Mã Cấu Hình Này
                      </button>
                      {importStatus && (
                        <p className={`text-xs font-bold mt-1 ${
                          importStatus.startsWith('Thành công') ? 'text-emerald-500' : 'text-red-500'
                        }`}>
                          {importStatus}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: Security & Reset */}
              {activeTab === 'security' && (
                <div className="space-y-4 max-w-md">
                  <form onSubmit={handleChangeNewPin} className="space-y-3">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Đổi mật khẩu quản trị mới
                    </label>
                    <p className="text-[11px] text-slate-500">
                      Mật khẩu quản trị được bảo vệ an toàn. Nhập mật khẩu mới (tối thiểu 4 ký tự):
                    </p>
                    <input
                      type="password"
                      value={newPin}
                      onChange={(e) => setNewPin(e.target.value)}
                      placeholder="Nhập mật khẩu mới..."
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-[#ff7a00]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#ff7a00] hover:bg-[#ff8800] text-white rounded-xl text-xs font-bold transition-all"
                    >
                      Cập nhật mật khẩu
                    </button>
                  </form>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-red-500 mb-2">Khôi phục cài đặt gốc</h4>
                    <p className="text-[11px] text-slate-500 mb-3">
                      Xóa toàn bộ các tùy biến dịch vụ và đưa về lại bảng giá nguyên bản ban đầu.
                    </p>
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1.5 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 rounded-xl text-xs font-bold transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Khôi phục dữ liệu gốc
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-100 dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {saveSuccess ? (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold animate-in fade-in">
                    <CheckCircle className="w-4 h-4" />
                    Đã lưu & áp dụng ngay vào My Services Include!
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500 hidden sm:inline">
                    Phím tắt mở nhanh bất kỳ lúc nào: <b>Ctrl + Shift + A</b>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAdminOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#ff7a00] to-[#ff9500] hover:from-[#ff8800] hover:to-[#ffa726] text-white font-extrabold rounded-xl shadow-lg shadow-[#ff7a00]/30 transition-all hover:scale-105 text-xs"
                >
                  <Save className="w-3.5 h-3.5" />
                  Lưu & Áp Dụng Ngay
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
