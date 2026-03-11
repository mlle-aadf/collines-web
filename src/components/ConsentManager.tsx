import { useState, useEffect, useRef } from "react";
import { X, Settings, ShieldCheck, Info } from "lucide-react";

interface ConsentState {
  essential: true;
  analytics: boolean;
  marketing: boolean;
}

interface ConsentManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (state: ConsentState) => void;
}

const ConsentManager = ({ isOpen, onClose, onSave }: ConsentManagerProps) => {
  const [prefs, setPrefs] = useState<ConsentState>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem("cookie-prefs");
      if (stored) {
        setPrefs(JSON.parse(stored));
      } else {
        // Default Loi 25: All optional off
        setPrefs({ essential: true, analytics: false, marketing: false });
      }
      if (firstFocusRef.current) firstFocusRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleToggle = (category: keyof ConsentState) => {
    if (category === "essential") return;
    setPrefs((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleAll = (value: boolean) => {
    setPrefs({
      essential: true,
      analytics: value,
      marketing: value,
    });
  };

  const save = () => {
    onSave(prefs);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="manager-title"
      >
        <div className="p-6 md:p-8 border-b border-border flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3 text-[#23622F]">
            <Settings size={24} className="animate-spin-slow" />
            <h2 id="manager-title" className="font-heading font-bold text-xl md:text-2xl text-[#1A1A1A]">
              Témoins & Suivi
            </h2>
          </div>
          <button 
            ref={firstFocusRef}
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <p className="font-body text-sm text-[#4A4A4A] leading-relaxed">
            Nous utilisons différents types de témoins pour améliorer votre expérience. Modifiez vos préférences ci-dessous conformément à la Loi 25.
          </p>

          <div className="space-y-4">
            {/* Essential */}
            <div className="flex items-start justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-[#1A1A1A]">Essentiels</span>
                  <span className="text-[10px] px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full uppercase font-bold tracking-wider">Requis</span>
                </div>
                <p className="text-xs text-[#666]">Nécessaires au fonctionnement du site. Ne peuvent être désactivés.</p>
              </div>
              <div className="relative inline-flex items-center cursor-not-allowed opacity-60">
                <div className="w-11 h-6 bg-[#23622F] rounded-full transition-colors"></div>
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full transition-transform"></div>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between p-4 rounded-2xl border border-border hover:border-[#23622F]/30 transition-colors group">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-[#1A1A1A]">Analyse & Performance</span>
                </div>
                <p className="text-xs text-[#666]">Nous aident à comprendre comment les visiteurs utilisent le site.</p>
              </div>
              <button 
                onClick={() => handleToggle("analytics")}
                aria-pressed={prefs.analytics}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23622F] ${prefs.analytics ? 'bg-[#23622F]' : 'bg-gray-200'}`}
              >
                <span className={`${prefs.analytics ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`} />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between p-4 rounded-2xl border border-border hover:border-[#23622F]/30 transition-colors group">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-[#1A1A1A]">Publicité & Marketing</span>
                </div>
                <p className="text-xs text-[#666]">Utilisés pour vous offrir du contenu et des publicités personnalisés.</p>
              </div>
              <button 
                onClick={() => handleToggle("marketing")}
                aria-pressed={prefs.marketing}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23622F] ${prefs.marketing ? 'bg-[#23622F]' : 'bg-gray-200'}`}
              >
                <span className={`${prefs.marketing ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl text-blue-700 text-xs">
            <Info size={16} className="shrink-0" />
            <p>Vos préférences sont sauvegardées pour vos prochaines visites.</p>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-gray-50 border-t border-border flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleAll(false)}
            className="flex-1 bg-white text-[#4A4A4A] border border-gray-300 font-body font-bold py-3 px-4 rounded-xl hover:bg-gray-100 transition-all text-sm"
          >
            Tout refuser
          </button>
          <button
            onClick={() => handleAll(true)}
            className="flex-1 bg-white text-[#23622F] border border-[#23622F] font-body font-bold py-3 px-4 rounded-xl hover:bg-[#23622F]/5 transition-all text-sm"
          >
            Tout accepter
          </button>
          <button
            onClick={save}
            className="flex-1 bg-[#23622F] text-white font-body font-bold py-3 px-4 rounded-xl hover:bg-[#184521] transition-all text-sm shadow-md"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentManager;
