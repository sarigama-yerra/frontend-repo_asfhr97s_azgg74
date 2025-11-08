import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-28 md:pt-28 md:pb-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              All-in-one studio OS for video teams
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
              Pre & Post Production—Client, Team, and Revenue in one sleek space
            </h1>
            <p className="mt-5 text-white/80 md:text-lg max-w-2xl">
              Manage clients, briefs, projects, tasks, timelines, invoicing and payments with a modern, glassmorphic interface. Designed for agencies, studios and ambitious creators.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium shadow-lg shadow-white/20 hover:bg-white/90 transition">
                Start Free Trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white px-5 py-3 font-medium backdrop-blur hover:bg-white/20 transition">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.2),transparent_40%)]" />
    </section>
  );
}
