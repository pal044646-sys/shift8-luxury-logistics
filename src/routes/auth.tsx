import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/site/Navbar";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Login — SHIFT8" },
      { name: "description", content: "SHIFT8 admin sign in." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null); setInfo(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin" });
      } else {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        setInfo("Account created! Check your email for confirmation, then sign in.");
        setMode("signin");
      }
    } catch (err: any) {
      setError(err?.message || "Authentication failed");
    } finally { setLoading(false); }
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-6">
            <Lock className="mx-auto text-gold mb-3" size={40} />
            <h1 className="font-display text-3xl text-gold-gradient">Admin Access</h1>
            <p className="text-foreground/60 text-sm mt-2">Sign in to manage bookings and enquiries.</p>
          </div>

          <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-sm text-foreground/70 mb-1.5">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                     className="w-full bg-transparent border border-gold/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm text-foreground/70 mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6}
                     className="w-full bg-transparent border border-gold/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-gold" />
            </div>

            {error && <p className="text-sm text-destructive-foreground">{error}</p>}
            {info && <p className="text-sm text-gold">{info}</p>}

            <button type="submit" disabled={loading}
                    className="w-full rounded-xl px-6 py-3 font-bold text-navy-deep disabled:opacity-60"
                    style={{ background: "var(--gradient-gold)" }}>
              {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
            </button>

            <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                    className="w-full text-sm text-gold/80 hover:text-gold">
              {mode === "signin" ? "First time? Create an account" : "Already have an account? Sign in"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
