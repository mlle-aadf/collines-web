import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[100] animate-fade-in-up">
            <div className="bg-background/95 backdrop-blur-md border border-border p-5 md:p-6 rounded-2xl shadow-card max-w-sm w-full mx-auto md:mx-0">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2.5 rounded-full text-primary shrink-0">
                        <Cookie size={20} />
                    </div>
                    <div className="flex-1 space-y-3">
                        <div>
                            <h3 className="font-heading font-bold text-lg text-foreground leading-tight">Politique des cookies</h3>
                            <p className="font-body text-sm text-foreground/80 mt-1">
                                Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de cookies.
                            </p>
                        </div>
                        <div className="flex gap-3 pt-1">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-primary text-primary-foreground font-body font-bold py-2.5 px-6 rounded-full hover:bg-secondary transition-all duration-300 shadow-sm active:scale-[0.98]"
                            >
                                Accepter
                            </button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="bg-muted text-foreground/70 font-body font-semibold py-2.5 px-6 rounded-full hover:bg-muted/90 hover:text-foreground transition-all duration-300 active:scale-[0.98]"
                            >
                                Plus tard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
