import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOG_POSTS, SITE } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Post not found — SHIFT8" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    const url = `${SITE.domain}/blog/${params.slug}`;
    return {
      meta: [
        { title: `${p.title} — SHIFT8` },
        { name: "description", content: p.description },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: p.date },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            author: { "@type": "Organization", name: SITE.name },
            publisher: { "@type": "Organization", name: SITE.name },
            mainEntityOfPage: url,
          }),
        },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", url: SITE.domain },
          { name: "Blog", url: `${SITE.domain}/blog` },
          { name: p.title, url },
        ])) },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <main>
      <Navbar />
      <article className="pt-28 sm:pt-36 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-foreground/60 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-gold">Blog</Link>
          </nav>
          <div className="flex items-center gap-3 text-xs text-foreground/55 mb-4">
            <span className="inline-flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.minutes} min read</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-gold-gradient mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-foreground/75 leading-relaxed mb-8">{post.description}</p>
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>
      <CTASection />
      <Footer />
    </main>
  );
}
