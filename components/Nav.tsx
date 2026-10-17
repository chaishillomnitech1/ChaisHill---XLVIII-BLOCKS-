import Link from "next/link";

const links = [["/", "Genesis"], ["/price-of-freedom", "Price of Freedom"], ["/tracker", "Tracker"], ["/vault", "Vault"]];

export default function Nav() {
  return (
    <nav className="glass mx-auto mt-4 flex max-w-5xl flex-wrap justify-center gap-6 px-6 py-3 text-sm">
      {links.map(([href, label]) => (
        <Link key={href} href={href} className="text-emerald hover:text-gold">{label}</Link>
      ))}
    </nav>
  );
}
