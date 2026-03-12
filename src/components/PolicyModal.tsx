import { ShieldCheck, X } from "lucide-react";
import { useEffect, useRef } from "react";

const policyData = {
  title: "Politique de confidentialité",
  closeAriaLabel: "Fermer",
  lastUpdated: "Dernière mise à jour : 2026-03-11",
  sections: [
    {
      title: "Engagement Loi 25",
      content: "Conformément à la Loi 25 du Québec, nous protégeons vos données personnelles."
    },
    {
      title: "Témoins essentiels uniquement",
      list: [
        "Fonctionnement technique du site",
        "Sécurité des sessions"
      ],
      footer: "Aucun suivi, analyse ou marketing."
    }
  ],
  technicalNote: {
    title: "Note technique",
    content: "Votre choix est conservé en session (supprimé à la fermeture de l'onglet)."
  },
  contact: {
    label: "Contact :",
    email: "info@fermedescollines.ca"
  },
  buttonText: "J'ai compris"
};

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
              {policyData.title}
            </h2>
          </div>
          <button 
            ref={firstFocusRef}
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            aria-label={policyData.closeAriaLabel}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto font-body text-sm text-[#4A4A4A] space-y-6">
          <div>
            <p className="font-bold text-[#1A1A1A]">{policyData.lastUpdated}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#1A1A1A]">{policyData.sections[0].title}</h4>
            <p>
              {policyData.sections[0].content}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#1A1A1A]">{policyData.sections[1].title}</h4>
            <ul className="list-disc pl-5 space-y-1">
              {policyData.sections[1].list?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="pt-1">{policyData.sections[1].footer}</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
            <p className="text-blue-800 font-semibold text-xs">{policyData.technicalNote.title}</p>
            <p className="text-blue-700 text-xs mt-1">
              {policyData.technicalNote.content}
            </p>
          </div>

          <div className="pt-2 text-xs">
            <p><span className="font-bold text-[#1A1A1A]">{policyData.contact.label}</span> {policyData.contact.email}</p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#23622F] text-white font-body font-bold py-3 px-8 rounded-xl hover:bg-[#184521] transition-all focus:outline-none focus:ring-4 focus:ring-[#23622F]/40"
          >
            {policyData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
