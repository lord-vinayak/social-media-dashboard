export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
       bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-white/40 p-6 overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
}
