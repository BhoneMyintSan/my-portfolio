// Grid Background Pattern
export function GridBackground({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      {children}
    </div>
  );
}

// Dot Pattern Background
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-muted-foreground/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}

// Gradient Mesh Background
export function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[60%] rounded-full bg-gradient-to-br from-purple-600/30 via-violet-600/25 to-transparent blur-3xl animate-blob" />
      <div className="absolute -top-[20%] -right-[20%] h-[70%] w-[50%] rounded-full bg-gradient-to-bl from-indigo-500/25 via-purple-500/20 to-transparent blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-[20%] left-[20%] h-[60%] w-[50%] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-600/15 to-transparent blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute top-[30%] right-[10%] h-[40%] w-[40%] rounded-full bg-gradient-to-tl from-violet-500/15 via-indigo-600/10 to-transparent blur-3xl animate-blob animation-delay-2000" />
    </div>
  );
}
