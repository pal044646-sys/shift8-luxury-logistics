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
          <span className="h-px w-10 bg-red/40" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-red">
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-red/40" />
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-foreground/70 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
