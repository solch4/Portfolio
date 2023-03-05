import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const { locales } = useRouter();

  return (
    <ul>
      {locales.map((l) => (
        <li key={l}>
          <Link key={l} href={"/"} locale={l}>
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
}
