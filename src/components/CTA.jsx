export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Run your pre & post pipeline on one platform</h3>
          <p className="mt-3 text-white/70">Start free, invite your team, import clients and projects in minutes. No credit card required.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium shadow-lg shadow-white/20 hover:bg-white/90 transition">Create Workspace</a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white px-5 py-3 font-medium backdrop-blur hover:bg-white/20 transition">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
