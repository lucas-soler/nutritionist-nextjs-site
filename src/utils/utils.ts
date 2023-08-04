export const capitalizeSentence = (wholeSentence: string) => {
  const sentences = wholeSentence.trim().split(".");

  const fullSentence = [];

  for (let sentence of sentences) {
    let trimmedSentence = sentence.trim();

    let isThereParagraphs = trimmedSentence.search("|");

    if (trimmedSentence) {
      let sentenceToPush =
        trimmedSentence.charAt(1).toUpperCase() + trimmedSentence.slice(2);

      if (isThereParagraphs >= 0) trimmedSentence.slice(0) + sentenceToPush;

      fullSentence.push(sentenceToPush);
    }
  }

  return fullSentence.join(". ");
};

export const capitalizePersonName = (sentence: string) => {
  const words = sentence.trim().split(" ");
  const fullName = [];

  for (let word of words) {
    if (word.trim()) {
      fullName.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  }

  return fullName.join(" ");
};
