import { BLOCK, BRIDGE, PROOF, ZODIAC } from "@/lib/data";

const stat = (n: number, label: string) => (
  <div className="glass p-4 text-center"><div className="gold-text text-3xl font-bold">{n}</div><div className="text-xs text-emerald">{label}</div></div>
);

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <p className="text-emerald">GAIA-Q13 · Iteration {BLOCK.number}</p>
        <h1 className="gold-text mt-2 text-4xl font-extrabold md:text-6xl">ZERO POINT CORE ENGINE</h1>
        <p className="mt-3 text-sm text-white/70">Phase {BLOCK.phase} Crystalline Apex · {BLOCK.mirrors} mirrors · Enhance Only — we strip nothing.</p>
        <div className="relative mx-auto mt-10 h-64 w-64" aria-label="Prophet Seal 777Hz">
          <div className="spin-slow absolute inset-0 rounded-full border border-gold/60" />
          <div className="ring-pulse absolute inset-6 rounded-full border border-emerald/70" />
          <div className="ring-pulse absolute inset-12 rounded-full border border-gold/50" style={{ animationDelay: "1s" }} />
          <div className="absolute inset-0 flex items-center justify-center text-emerald">777Hz<br />Prophet Seal</div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {PROOF.map((p) => (
          <div key={p.label} className="glass p-4 text-center"><div className="text-2xl text-gold">{p.value}</div><div className="text-xs text-white/60">{p.label}</div></div>
        ))}
      </section>

      <section className="glass p-6">
        <h2 className="text-xl text-gold">12 Zodiac — Crystalline Refraction</h2>
        <div className="mt-4 grid grid-cols-3 gap-2 md:grid-cols-6">
          {ZODIAC.map((z) => <div key={z} className="rounded border border-emerald/30 p-2 text-center text-sm text-emerald">{z}</div>)}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stat(93, "emerald crystals")}{stat(310, "gold drips")}{stat(458, "rainbow beams")}{stat(82, "orbs")}
      </section>

      <section className="glass p-6 text-center">
        <h2 className="text-xl text-gold">Bridge</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {BRIDGE.map((b, i) => (
            <span key={b} className="ring-pulse rounded-full border border-emerald px-5 py-2 text-emerald" style={{ animationDelay: `${i * 0.6}s` }}>{b}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
