import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import PolicyModal from "./PolicyModal";
import ConsentManager from "./ConsentManager";

// Helper function to be exported and used in other components (like Footer)
export const openConsentManager = () => {
  window.dispatchEvent(new CustomEvent("open-consent-manager"));
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);

  useEffect(() => {
    // Check for previous consent in localStorage
    const stored = localStorage.getItem("cookie-prefs");
    const consentValue = stored ? JSON.parse(stored) : null;

    if (!consentValue) {
      // Small delay for better UX if no choice made yet
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Re-apply analytics if previously accepted
      if (consentValue.analytics) {
        loadAnalytics();
      }
    }
  }, []);

  // Listen for custom events
  useEffect(() => {
    const handleReopen = () => setIsVisible(true);
    const handleOpenManager = () => setIsManagerOpen(true);

    window.addEventListener("reopen-cookie-consent", handleReopen);
    window.addEventListener("open-consent-manager", handleOpenManager);
    
    return () => {
      window.removeEventListener("reopen-cookie-consent", handleReopen);
      window.removeEventListener("open-consent-manager", handleOpenManager);
    };
  }, []);

  const loadAnalytics = () => {
    console.log("🚀 Analytics LOADED: Loi 25 status check passed.");
    // Insert real tracking scripts here
    // example: window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  };

  const unloadAnalytics = () => {
    console.log("🛑 Analytics UNLOADED: Consent withdrawn.");
    // Clear cookies or disable tracking objects here
    // example: window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
  };

  const handleInitialChoice = (choice: "accepted" | "rejected") => {
    const prefs = {
      essential: true,
      analytics: choice === "accepted",
      marketing: choice === "accepted",
      timestamp: new Date().toISOString(),
    };
    
    savePrefs(prefs);
    setIsVisible(false);
  };

  const savePrefs = (prefs: any) => {
    localStorage.setItem("cookie-prefs", JSON.stringify(prefs));
    
    if (prefs.analytics) {
      loadAnalytics();
    } else {
      unloadAnalytics();
    }
  };

  if (!isVisible && !isPolicyOpen && !isManagerOpen) return null;

  return (
    <>
      {/* Initial Tooltip Banner */}
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
                  onClick={() => setIsPolicyOpen(true)}
                  className="text-[#23622F] font-bold underline hover:text-[#184521] transition-colors"
                >
                  Voir politique
                </button>
              </p>

              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={() => handleInitialChoice("rejected")}
                  className="flex-1 bg-[#F5F5F5] text-[#4A4A4A] font-body font-bold py-3 px-4 rounded-xl hover:bg-[#EAEAEA] transition-all duration-300 border border-[#DEDEDE]"
                >
                  Refuser
                </button>
                <button
                  onClick={() => handleInitialChoice("accepted")}
                  className="flex-1 bg-[#23622F] text-white font-body font-bold py-3 px-4 rounded-xl hover:bg-[#184521] transition-all duration-300 shadow-sm"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Policy View Modal */}
      <PolicyModal 
        isOpen={isPolicyOpen} 
        onClose={() => setIsPolicyOpen(false)} 
        onReopenConsent={() => setIsManagerOpen(true)}
      />

      {/* Granular Consent Manager */}
      <ConsentManager 
        isOpen={isManagerOpen} 
        onClose={() => setIsManagerOpen(false)} 
        onSave={(prefs) => {
          savePrefs({ ...prefs, timestamp: new Date().toISOString() });
          setIsVisible(false);
        }}
      />
    </>
  );
};

export default CookieConsent;
