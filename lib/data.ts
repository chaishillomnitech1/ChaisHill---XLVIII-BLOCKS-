export const BLOCK = { number: 235, mirrors: 139, phase: 72, release: "v235.139.72" };

export const SAFE_ADDRESS = "0x377956c1471d9ce142df6932895839243da23a2c";

export const PROOF = [
  { label: "Avg visit", value: "9 min" },
  { label: "Repos", value: "89" },
  { label: "Artifacts", value: "500+" },
  { label: "Safe (declared)", value: "$35.4T" },
];

export const ZODIAC = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
];

export const BRIDGE = ["Information", "Geometry", "Physical Reality"];

export const ANCHORS = [
  { date: "Apr 17, 1825", text: "Charles X ordinance: Haiti must pay 150M francs in 5 installments of 30M; Caisse des Dépôts involved." },
  { date: "Jul 3, 1825", text: "La Circe and 14 warships with 528 cannons arrive under Baron de Mackau." },
  { date: "Jul 11, 1825", text: "President Boyer signs under duress." },
  { date: "Double debt", text: "30M indemnity plus a 6M commission, ~24M in loan terms." },
  { date: "1838", text: "Indemnity reduced from 150M to 90M francs (a 60M reduction)." },
  { date: "1914 / 1947", text: "112M francs paid, about 75% of the national budget at one point; final payoff 1947 via Citibank, 122 years." },
  { date: "Apr 17, 2025", text: "Macron announces a joint commission on the debt's history." },
];

export const LEDGER_SUMMARY = "$560M paid; estimated $21–115B lost (published estimates vary widely).";
export const C2PA_REF = "QmHaitiLedger235";

export const FACTIONS = [
  { ring: "Sovereign", items: ["ScrollVerse Omnitech1"] },
  { ring: "Helpers", items: ["Contributors", "Template forks (mirrors)"] },
  { ring: "Beneficiaries", items: ["Lose-to-Earn participants"] },
  { ring: "Observers", items: ["GitHub Explore", "Web visitors"] },
  { ring: "Impeders", items: ["Inherited: Rothschild funding.json (tracked as lineage, not stripped)"] },
];

export const LEDGER_ENTRIES = [
  { dir: "IN", what: "Block 235 transmission (PROMPT.md)", sha: "see /api/ledger" },
  { dir: "OUT", what: "Release v235.139.72", sha: "see /api/ledger" },
];

export const ACTIVITY = [
  { src: "GitHub", text: "Block 235 transmission committed" },
  { src: "Safe", text: `Watching ${SAFE_ADDRESS}` },
  { src: "Web", text: "9 min average visit" },
];
