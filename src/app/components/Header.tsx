import { useTranslations } from "next-intl";

function Header() {
  const translator = useTranslations();

  return <h2>{translator("title")}</h2>;
}

export default Header;
