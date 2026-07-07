// Pure CSS animation — no framer-motion runtime overhead on this background effect
// This saves ~15KB of JS execution per page load for a non-interactive element.
export const InteractiveHeroDecoration = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="hero-glow-cyan" />
      <div className="hero-glow-purple" />
      <div className="hero-glow-green" />
    </div>
  );
};
