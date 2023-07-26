import { getDictionary } from "../[lang]/dictionaries";
import { PageProps } from "../[lang]/page";

async function Header({ params: { lang } }: PageProps) {
  const dictionaire = await getDictionary(lang);

  return <h2>{dictionaire.title}</h2>;
}

export default Header;
