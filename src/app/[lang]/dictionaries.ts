import "server-only";

const dictionaries = {
  pt: () =>
    import("../../dictionaries/pt.json").then((module) => module.default),
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
};

// @ts-ignore
export const getDictionary = async (locale) => dictionaries[locale]();
