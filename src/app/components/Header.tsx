import { useTranslations } from "next-intl";

function Header() {
  const translator = useTranslations();

  return <h1>{translator("title")}</h1>;
}

export default Header;
