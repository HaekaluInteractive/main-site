/**
 * GridPattern Component — Haeka Interactive
 * Subtle grid overlay for Afrofuturist tech aesthetic
 */

export default function GridPattern({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, ${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  );
}
