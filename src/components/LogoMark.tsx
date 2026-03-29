const BRAND_SRC = "/logo.png";
const BRAND_W = 672;
const BRAND_H = 294;

export function LogoMark({
  className = "",
  priority = false,
}: {
  className?: string;
  /** Prefer LCP when used above the fold (e.g. hero). */
  priority?: boolean;
}) {
  return (
    <img
      className={className}
      src={BRAND_SRC}
      alt=""
      width={BRAND_W}
      height={BRAND_H}
      decoding="async"
      draggable={false}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
