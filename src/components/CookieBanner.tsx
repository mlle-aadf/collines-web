import { useProcessedLandingPageData } from "@/hooks/useLandingPageData";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";
import PolicyModal from "./PolicyModal";

export const openPrivacyPolicy = () => {
  window.dispatchEvent(new CustomEvent("open-privacy-policy"));
};

const CookieBanner = () => {
  const { data: landingPageData, isLoading, error } = useProcessedLandingPageData();
  const [isVisible, setIsVisible] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-prefs") || sessionStorage.getItem("cookie-prefs");
    const prefs = stored ? JSON.parse(stored) : null;
    const now = new Date();

    if (prefs && prefs.expires && new Date(prefs.expires) > now) {
      // consent still valid; keep banner hidden
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpenPolicy = () => setIsPolicyOpen(true);
    window.addEventListener("open-privacy-policy", handleOpenPolicy);

    return () => {
      window.removeEventListener("open-privacy-policy", handleOpenPolicy);
    };
  }, []);

  const handleAccept = () => {
    const expires = new Date();
    expires.setMonth(expires.getMonth() + 6); // 6 months from now

    const prefs = {
      essential: true,
      timestamp: new Date().toISOString(),
      expires: expires.toISOString(),
    };

    localStorage.setItem("cookie-prefs", JSON.stringify(prefs));
    setIsVisible(false);
  };

  if (!isVisible && !isPolicyOpen) return null;

  // Use default values if data is loading or there's an error
  const cookieBanner = landingPageData?.cookieBanner || {
    title: "Témoins et confidentialité",
    description: "Ce site utilise des témoins essentiels uniquement pour assurer son bon fonctionnement.",
    policyLinkText: "Politique de confidentialité",
    acceptButtonText: "Accepter"
  };

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
                  {cookieBanner.title}
                </h3>
              </div>

              <p id="cookie-desc" className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                {cookieBanner.description}{" "}
                <button
                  onClick={() => setIsPolicyOpen(true)}
                  className="text-[#23622F] font-bold underline hover:text-[#184521] transition-colors"
                >
                  {cookieBanner.policyLinkText}
                </button>
              </p>

              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={handleAccept}
                  className="w-full bg-[#23622F] text-white font-body font-bold py-3 px-4 rounded-xl hover:bg-[#184521] transition-all duration-300 shadow-sm text-sm"
                >
                  {cookieBanner.acceptButtonText}
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