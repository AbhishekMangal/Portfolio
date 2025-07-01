export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-amber-400/20 to-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }}></div>
    </div>
  );
}
