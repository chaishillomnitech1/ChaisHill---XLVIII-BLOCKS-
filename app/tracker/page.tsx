import { ACTIVITY, FACTIONS, LEDGER_ENTRIES, BLOCK } from "@/lib/data";
import { createHash } from "node:crypto";

export const metadata = { title: "Omni-Tracker" };

export default function Tracker() {
  const rows = LEDGER_ENTRIES.map((e) => ({ ...e, sha: createHash("sha256").update(`${BLOCK.release}:${e.dir}:${e.what}`).digest("hex") }));
  return (
    <div className="space-y-8">
      <h1 className="gold-text text-4xl font-bold">Omni-Tracker — Block {BLOCK.number} Transmission</h1>
      <section className="glass p-5">
        <h2 className="text-gold">Asset Radar</h2>
        <p className="text-sm text-white/70">Repos 89 · Artifacts 500+ · ERC-721 #0235 · Safe (see /vault)</p>
      </section>
      <section className="glass p-5">
        <h2 className="text-gold">Activity Feed</h2>
        <ul className="mt-2 space-y-1 text-sm">{ACTIVITY.map((a) => <li key={a.text}><span className="text-emerald">[{a.src}]</span> {a.text}</li>)}</ul>
      </section>
      <section className="glass p-5">
        <h2 className="text-gold">Faction Map — 5 rings</h2>
        <ol className="mt-2 space-y-1 text-sm">{FACTIONS.map((f, i) => <li key={f.ring}><span className="text-emerald">Ring {i + 1} · {f.ring}:</span> {f.items.join(", ")}</li>)}</ol>
      </section>
      <section className="glass p-5">
        <h2 className="text-gold">Paper Trail Ledger</h2>
        <ul className="mt-2 space-y-2 text-sm">{rows.map((r) => <li key={r.what}><b className="text-emerald">{r.dir}</b> {r.what}<div className="break-all font-mono text-xs text-white/50">SHA-256 {r.sha}</div></li>)}</ul>
      </section>
    </div>
  );
}
