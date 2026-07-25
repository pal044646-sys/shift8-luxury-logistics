import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitFeedback } from "@/lib/tracking.functions";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Star, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/feedback/$code")({
  head: () => ({
    meta: [
      { title: "Rate Your Move — SHIFT8" },
      { name: "description", content: "Tell us how we did — your feedback helps us improve." },
      { property: "og:title", content: "Rate Your Move — SHIFT8" },
      { property: "og:description", content: "Share your experience with SHIFT8 movers." },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const { code } = Route.useParams();
  const send = useServerFn(submitFeedback);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      await send({ data: { tracking_code: code, customer_name: name, rating, comment } });
      setDone(true);
    } catch (err: any) {
      setError(err?.message || "Could not submit.");
    } finally { setLoading(false); }
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {done ? (
            <div className="glass-card rounded-2xl p-10 text-center gold-border">
              <div className="text-6xl mb-3">🎉✨</div>
              <CheckCircle2 className="text-gold mx-auto mb-4" size={56} />
              <h1 className="font-display text-3xl mb-2 text-gold-gradient">Shukriya!</h1>
              <p className="text-foreground/80 mb-6">
                Aapke feedback ke liye dhanyavaad — hum aur behtar banate rahenge. 💛🚚
              </p>
              <Link to="/" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-navy-deep"
                    style={{ background: "var(--gradient-gold)" }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="font-display tracking-[0.25em] text-xs text-gold/90 uppercase mb-3">Your Feedback Matters</p>
                <h1 className="font-display text-3xl sm:text-5xl mb-2">
                  How was your <span className="text-gold-gradient">move?</span>
                </h1>
                <p className="text-foreground/60 text-sm">Tracking: {code}</p>
              </div>

              <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="text-center">
                  <p className="text-sm text-foreground/70 mb-3">Rate your experience</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button key={n} type="button" onClick={() => setRating(n)}
                              className="transition-transform hover:scale-110">
                        <Star size={44} className={n <= rating ? "fill-gold text-gold" : "text-foreground/25"} />
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-foreground/50 mt-2">{rating} / 5</p>
                </div>

                <div>
                  <label className="block text-sm text-foreground/70 mb-1.5">Your Name (optional)</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80}
                         className="w-full bg-transparent border border-gold/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-gold" />
                </div>

                <div>
                  <label className="block text-sm text-foreground/70 mb-1.5">Comment</label>
                  <textarea rows={4} value={comment} onChange={(e) => setComment(e.target.value)} maxLength={1000}
                            placeholder="Kya aacha laga? Kahan hum aur behtar ho sakte hain?"
                            className="w-full bg-transparent border border-gold/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-gold" />
                </div>

                {error && <p className="text-destructive-foreground text-sm">{error}</p>}

                <button type="submit" disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-navy-deep disabled:opacity-60"
                        style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                  {loading ? "Submitting..." : "Submit Feedback"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
