export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      {eyebrow && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-10 bg-gold/50" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-gold/50" />
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-foreground/75 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
