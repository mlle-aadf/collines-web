import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import PolicyModal from "./PolicyModal";

export const openPrivacyPolicy = () => {
  window.dispatchEvent(new CustomEvent("open-privacy-policy"));
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("cookie-prefs");
    const prefs = stored ? JSON.parse(stored) : null;

    if (!prefs) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenPolicy = () => setIsPolicyOpen(true);
    window.addEventListener("open-privacy-policy", handleOpenPolicy);
    
    return () => {
      window.removeEventListener("open-privacy-policy", handleOpenPolicy);
    };
  }, []);

  const handleAccept = () => {
    const prefs = {
      essential: true,
      timestamp: new Date().toISOString(),
    };
    sessionStorage.setItem("cookie-prefs", JSON.stringify(prefs));
    setIsVisible(false);
  };

  if (!isVisible && !isPolicyOpen) return null;

  return (
    <>
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
                Ce site utilise des témoins essentiels uniquement pour assurer son bon fonctionnement.{" "}
                <button 
                  onClick={() => setIsPolicyOpen(true)}
                  className="text-[#23622F] font-bold underline hover:text-[#184521] transition-colors"
                >
                  Politique de confidentialité
                </button>
              </p>

              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={handleAccept}
                  className="w-full bg-[#23622F] text-white font-body font-bold py-3 px-4 rounded-xl hover:bg-[#184521] transition-all duration-300 shadow-sm text-sm"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <PolicyModal 
        isOpen={isPolicyOpen} 
        onClose={() => setIsPolicyOpen(false)} 
      />
    </>
  );
};

export default CookieBanner;
