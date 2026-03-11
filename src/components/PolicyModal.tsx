import { useRef, useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReopenConsent: () => void;
}

const PolicyModal = ({ isOpen, onClose, onReopenConsent }: PolicyModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  // Focus trap
  useEffect(() => {
    if (isOpen && firstFocusRef.current) {
      firstFocusRef.current.focus();
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="p-6 md:p-8 border-b border-border flex justify-between items-center">
          <div className="flex items-center gap-3 text-[#23622F]">
            <ShieldCheck size={24} />
            <h2 id="modal-title" className="font-heading font-bold text-xl md:text-2xl text-[#1A1A1A]">
              Politique de confidentialité
            </h2>
          </div>
          <button 
            ref={firstFocusRef}
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto font-body text-sm text-[#4A4A4A] space-y-4">
          <p className="font-bold text-[#1A1A1A]">Dernière mise à jour : {new Date().toLocaleDateString('fr-CA')}</p>
          
          <h4 className="font-bold text-[#1A1A1A]">Respect de la Loi 25</h4>
          <p>
            Conformément à la Loi 25 du Québec, nous protégeons vos données personnelles. 
            Les témoins nous servent à analyser le trafic pour améliorer votre expérience.
          </p>

          <h4 className="font-bold text-[#1A1A1A]">Retrait du consentement</h4>
          <p className="leading-relaxed">
            Modifiez vos préférences en tout temps via le bouton : 
            <button 
              onClick={() => {
                onClose();
                onReopenConsent();
              }}
              className="text-[#23622F] font-bold underline mx-1 hover:text-[#184521] transition-colors inline-block"
            >
              Gérer les témoins
            </button>
            (également disponible en pied de page).
          </p>

          <h4 className="font-bold text-[#1A1A1A]">Détails sur l'utilisation</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
            <p className="text-amber-800 font-semibold text-xs">Note technique</p>
            <p className="text-amber-700 text-xs mt-1">
              Votre choix est conservé localement jusqu'au nettoyage de vos données de navigation.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#23622F] text-white font-body font-bold py-3 px-8 rounded-xl hover:bg-[#184521] transition-all focus:outline-none focus:ring-4 focus:ring-[#23622F]/40"
          >
            Compris
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
