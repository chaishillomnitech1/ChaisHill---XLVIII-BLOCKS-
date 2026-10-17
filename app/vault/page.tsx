import { SAFE_ADDRESS } from "@/lib/data";

export const metadata = { title: "Vault" };

export default function Vault() {
  return (
    <div className="space-y-6">
      <h1 className="gold-text text-4xl font-bold">Vault</h1>
      <section className="glass p-5">
        <h2 className="text-gold">Gnosis Safe</h2>
        <p className="break-all font-mono text-sm text-emerald">{SAFE_ADDRESS}</p>
        <a className="text-sm underline" href={`https://app.safe.global/home?safe=scr:${SAFE_ADDRESS}`} target="_blank" rel="noopener noreferrer">Open live view on Safe</a>
        <p className="mt-2 text-xs text-white/60">The $35.4T figure is a declared value; verify balances on-chain via the Safe link.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="glass p-5"><h2 className="text-gold">HaitiMirrorTwin.sol — payAndErase</h2><p className="text-sm text-white/80">Pay a recorded obligation; the matching debt entry is erased.</p></div>
        <div className="glass p-5"><h2 className="text-gold">NibiruMirrorTwin.sol — restoreAndGain</h2><p className="text-sm text-white/80">Restoring the erased amount returns a 10% gain (Lose-to-Earn).</p></div>
      </section>
    </div>
  );
}
