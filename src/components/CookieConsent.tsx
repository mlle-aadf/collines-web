import { useState, useEffect, useRef } from "react";
import { X, Cookie, ShieldCheck } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    const consentValue = consent ? JSON.parse(consent) : null;

    if (!consentValue) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (consentValue.choice === "accepted") {
      loadAnalytics();
    }
  }, []);

  // Listen for custom event to reopen tooltip
  useEffect(() => {
    const handleReopen = () => setIsVisible(true);
    window.addEventListener("reopen-cookie-consent", handleReopen);
    return () => window.removeEventListener("reopen-cookie-consent", handleReopen);
  }, []);

  // Focus trap for modal
  useEffect(() => {
    if (isModalOpen && firstFocusRef.current) {
      firstFocusRef.current.focus();
    }
  }, [isModalOpen]);

  // Handle ESC key for modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  const loadAnalytics = () => {
    // Loi 25: Load tracking scripts here only after explicit consent
    console.log("Analytics loaded: Consent status is 'accepted'");
    
    // Example implementation:
    // if (!document.getElementById('ga-script')) {
    //   const script = document.createElement('script');
    //   script.id = 'ga-script';
    //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    //   script.async = true;
    //   document.head.appendChild(script);
    // }
  };

  const handleChoice = (choice: "accepted" | "rejected") => {
    const consentData = {
      choice,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    
    if (choice === "accepted") {
      loadAnalytics();
    }
    
    setIsVisible(false);
  };

  if (!isVisible && !isModalOpen) return null;

  return (
    <>
      {/* Tooltip Banner */}
      {isVisible && (
        <div 
          className="fixed bottom-4 right-4 z-[100] animate-fade-in-up w-full max-w-[380px] px-4 md:px-0"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
        >
          <div className="bg-white border border-border p-6 rounded-2xl shadow-2xl ring-1 ring-black/5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#23622F]/10 p-2 rounded-lg text-[#23622F]">
                  <Cookie size={20} />
                </div>
                <h3 id="cookie-title" className="font-heading font-bold text-lg text-[#1A1A1A]">
                  Témoins et confidentialité
                </h3>
              </div>
              
              <p id="cookie-desc" className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                Nous utilisons des témoins pour analyser le trafic. Acceptez-vous ?{" "}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#23622F] font-bold underline hover:text-[#184521] transition-colors"
                >
                  Voir politique
                </button>
              </p>

              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={() => handleChoice("rejected")}
                  className="flex-1 bg-[#F5F5F5] text-[#4A4A4A] font-body font-bold py-3 px-4 rounded-xl hover:bg-[#EAEAEA] transition-all duration-300 border border-[#DEDEDE]"
                >
                  Refuser
                </button>
                <button
                  onClick={() => handleChoice("accepted")}
                  className="flex-1 bg-[#23622F] text-white font-body font-bold py-3 px-4 rounded-xl hover:bg-[#184521] transition-all duration-300 shadow-sm"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Policy Modal */}
      {isModalOpen && (
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
                onClick={() => setIsModalOpen(false)}
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
                Conformément à la Loi 25 du Québec, nous nous engageons à protéger vos données personnelles. 
                Les témoins (cookies) nous permettent de comprendre comment vous interagissez avec notre site web 
                afin d'améliorer nos services.
              </p>

              <h4 className="font-bold text-[#1A1A1A]">Retrait du consentement</h4>
              <p className="leading-relaxed">
                Vous pouvez retirer ou modifier votre consentement en tout temps. Pour ajuster vos préférences, veuillez utiliser le lien : 
                <button 
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsVisible(true);
                  }}
                  className="text-[#23622F] font-bold underline mx-1 hover:text-[#184521] transition-colors inline-block"
                >
                  Gérer les témoins
                </button>
                Ce lien est également accessible en permanence dans le pied de page de notre site.
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
                <p className="text-amber-800 font-semibold">Note technique</p>
                <p className="text-amber-700 text-xs mt-1">
                  Votre choix est enregistré dans votre navigateur local pour une durée indéterminée ou jusqu'à ce que vous effaciez vos données de navigation.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-border flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#23622F] text-white font-body font-bold py-3 px-8 rounded-xl hover:bg-[#184521] transition-all"
              >
                Compris
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
