import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (sessionStorage.getItem("shift8-install-dismissed")) return;

    function onBIP(e: Event) {
      e.preventDefault();
      setDeferred(e as BIPEvent);
      setVisible(true);
    }
    window.addEventListener("beforeinstallprompt", onBIP);
    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  if (!visible || !deferred) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-4 sm:max-w-sm z-50 glass-card rounded-2xl p-4 gold-border shadow-2xl">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
          <Download size={20} className="text-navy-deep" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display text-sm text-gold-gradient font-semibold">Install SHIFT8 App</p>
          <p className="text-xs text-foreground/70 mt-0.5">Track orders faster, get notifications & offers.</p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={async () => {
                await deferred.prompt();
                await deferred.userChoice;
                setVisible(false);
              }}
              className="rounded-lg px-3 py-1.5 text-xs font-bold text-navy-deep"
              style={{ background: "var(--gradient-gold)" }}
            >
              Install
            </button>
            <button
              onClick={() => {
                sessionStorage.setItem("shift8-install-dismissed", "1");
                setVisible(false);
              }}
              className="rounded-lg px-3 py-1.5 text-xs text-foreground/60"
            >
              Later
            </button>
          </div>
        </div>
        <button onClick={() => { sessionStorage.setItem("shift8-install-dismissed", "1"); setVisible(false); }}
                className="text-foreground/40 hover:text-foreground">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
