/**
 * ScanLineEffect Component — Haeka Interactive
 * Animated scan line for futuristic tech aesthetic
 */

export default function ScanLineEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-electric to-transparent animate-scan-line" />
    </div>
  );
}
