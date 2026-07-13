import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS, SITE } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const url = `${SITE.domain}/blog`;
    const title = "SHIFT8 Blog — Moving Tips, Checklists & Relocation Guides";
    const description = "Practical moving advice from Haridwar's trusted packers and movers — pricing guides, packing checklists, and route insights.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <Navbar />
      <section className="pt-28 sm:pt-36 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="SHIFT8 Journal"
            title={<>Moving Tips &amp; Relocation Guides</>}
            subtitle="Honest, useful advice from crews that move Haridwar families every week."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group glass-card rounded-2xl p-6 hover:border-gold/50 transition"
              >
                <div className="flex items-center gap-3 text-xs text-foreground/55 mb-3">
                  <span className="inline-flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.minutes} min read</span>
                </div>
                <h2 className="font-display text-xl text-foreground group-hover:text-gold transition mb-2">{post.title}</h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{post.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-gold">Read guide <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
