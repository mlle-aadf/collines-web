import { useRef, useEffect } from "react";
import { X, Settings, CheckCircle2 } from "lucide-react";

interface ConsentManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsentManager = ({ isOpen, onClose }: ConsentManagerProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && firstFocusRef.current) {
      firstFocusRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="manager-title"
      >
        <div className="p-6 border-b border-border flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3 text-[#23622F]">
            <Settings size={20} />
            <h2 id="manager-title" className="font-heading font-bold text-lg text-[#1A1A1A]">
              Témoins
            </h2>
          </div>
          <button 
            ref={firstFocusRef}
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-6 space-y-4 text-center">
          <div className="flex flex-col items-center gap-3 py-2">
            <div className="flex items-center gap-2 text-[#23622F] font-bold">
              <CheckCircle2 size={24} />
              <span>Essentiels (toujours activés)</span>
            </div>
            <p className="font-body text-sm text-[#4A4A4A]">
              Aucun autre témoin n'est utilisé sur ce site.
            </p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-border flex justify-center">
          <button
            onClick={onClose}
            className="w-full bg-[#23622F] text-white font-body font-bold py-3 px-6 rounded-xl hover:bg-[#184521] transition-all focus:outline-none focus:ring-4 focus:ring-[#23622F]/40"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentManager;
