import { getTranslator } from "next-intl/server";
import { ComponentProps } from "../[locale]/page";

async function Header({ locale }: ComponentProps) {
  const translator = await getTranslator(locale);

  return <h2>{translator("title")}</h2>;
}

export default Header;
