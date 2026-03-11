import { useRef, useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PolicyModal = ({ isOpen, onClose }: PolicyModalProps) => {
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
        <div className="p-6 md:p-8 border-b border-border flex justify-between items-center bg-gray-50/50">
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
          
          <h4 className="font-bold text-[#1A1A1A]">Engagement Loi 25</h4>
          <p>
            Conformément à la Loi 25 du Québec, nous nous engageons à protéger vos données personnelles.
            Ce site utilise uniquement des témoins **essentiels** pour assurer son bon fonctionnement technique.
          </p>

          <h4 className="font-bold text-[#1A1A1A]">Témoins utilisés</h4>
          <p className="leading-relaxed">
            Nous n'utilisons aucun témoin de suivi, d'analyse ou de marketing. Les seuls témoins servent à :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mémoriser vos préférences de navigation.</li>
            <li>Assurer la sécurité de vos données.</li>
            <li>Améliorer la performance du site.</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
            <p className="text-blue-800 font-semibold text-xs">Note technique</p>
            <p className="text-blue-700 text-xs mt-1">
              Votre choix est conservé localement pour respecter vos préférences lors de vos prochaines visites.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#23622F] text-white font-body font-bold py-3 px-8 rounded-xl hover:bg-[#184521] transition-all focus:outline-none focus:ring-4 focus:ring-[#23622F]/40"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
