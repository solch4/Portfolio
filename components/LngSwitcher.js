import Link from "next/link";
import { languages } from "../app/i18n/settings";

export default async function LngSwitcher({ lng }) {
  return (
    <ul>
      {languages.map((l) => (
        <li key={l}>
          {l === lng && "👉"}
          <Link href={`/${l}`}>{l}</Link>
        </li>
      ))}
    </ul>
  );
}
