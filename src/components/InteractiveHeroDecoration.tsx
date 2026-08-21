// Pure CSS animation — zero framer-motion runtime overhead on this background effect
export const InteractiveHeroDecoration = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="hero-glow-orange-1" />
      <div className="hero-glow-orange-2" />
      <div className="hero-glow-amber" />
    </div>
  );
};
