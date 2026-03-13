import { ShieldCheck, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useProcessedLandingPageData } from "@/hooks/useLandingPageData";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PolicyModal = ({ isOpen, onClose }: PolicyModalProps) => {
  const { data: landingPageData, isLoading, error } = useProcessedLandingPageData();
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

  // Use default values if data is loading or there's an error
  const policy = landingPageData?.policy || {
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
        list: ["Fonctionnement technique du site", "Sécurité des sessions"],
        footer: "Aucun suivi, analyse ou marketing."
      }
    ],
    technicalNote: {
      title: "Note technique",
      content: "L'état de cette bannière est conservé 6 mois via un témoin essentiel."
    },
    contact: {
      label: "Contact :",
      email: "info@fermedescollines.ca"
    },
    buttonText: "J'ai compris"
  };

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
              {policy.title}
            </h2>
          </div>
          <button
            ref={firstFocusRef}
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            aria-label={policy.closeAriaLabel}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto font-body text-sm text-[#4A4A4A] space-y-6">
          <div>
            <p className="font-bold text-[#1A1A1A]">{policy.lastUpdated}</p>
          </div>

          {policy.sections?.map((section, index) => (
            <div key={section._key || index} className="space-y-2">
              <h4 className="font-bold text-[#1A1A1A]">{section.title}</h4>
              {section.content && <p>{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {section.footer && <p className="pt-1">{section.footer}</p>}
            </div>
          ))}

          {policy.technicalNote && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <p className="text-blue-800 font-semibold text-xs">{policy.technicalNote.title}</p>
              <p className="text-blue-700 text-xs mt-1">
                {policy.technicalNote.content}
              </p>
            </div>
          )}

          {policy.contact && (
            <div className="pt-2 text-xs">
              <p><span className="font-bold text-[#1A1A1A]">{policy.contact.label}</span> {policy.contact.email}</p>
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#23622F] text-white font-body font-bold py-3 px-8 rounded-xl hover:bg-[#184521] transition-all focus:outline-none focus:ring-4 focus:ring-[#23622F]/40"
          >
            {policy.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;

export default PolicyModal;
