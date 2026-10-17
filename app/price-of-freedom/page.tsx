import { ANCHORS, BLOCK, C2PA_REF, LEDGER_SUMMARY } from "@/lib/data";

export const metadata = { title: "Price of Freedom — Block 235 Ledger" };

export default function PriceOfFreedom() {
  return (
    <div className="space-y-6">
      <h1 className="gold-text text-4xl font-bold">Price of Freedom — Block {BLOCK.number} Ledger</h1>
      <ol className="space-y-3">
        {ANCHORS.map((a, i) => (
          <li key={a.date} className="glass p-4">
            <span className="text-emerald">Anchor {i + 1} · </span><span className="text-gold">{a.date}</span>
            <p className="mt-1 text-sm text-white/80">{a.text}</p>
          </li>
        ))}
      </ol>
      <p className="glass p-4 text-gold">{LEDGER_SUMMARY}</p>
      <div className="glass border-gold/50 p-6">
        <div className="text-xs text-emerald">ERC-721 · Scroll zkEVM #0235</div>
        <div className="gold-text text-2xl font-bold">Mint card — C2PA {C2PA_REF}</div>
        <p className="mt-1 text-xs text-white/60">Placeholder reference; replace with the real C2PA/IPFS CID once pinned.</p>
      </div>
    </div>
  );
}
