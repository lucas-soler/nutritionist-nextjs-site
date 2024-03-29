export const capitalizeSentence = (wholeSentence: string) => {
  const sentences = wholeSentence.trim().split(".");

  const fullSentence = [];

  for (let sentence of sentences) {
    let trimmedSentence = sentence.trim();

    if (trimmedSentence) {
      let sentenceToPush;

      if (trimmedSentence.includes("|")) {
        sentenceToPush =
          trimmedSentence.charAt(0) +
          trimmedSentence.charAt(1).toUpperCase() +
          trimmedSentence.slice(2);
      } else {
        sentenceToPush =
          trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
      }

      fullSentence.push(sentenceToPush);
    }
  }

  return fullSentence.join(". ").concat(".");
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

export function capitalizeWord(word: string): string {
  const wordArray = word.split("");
  wordArray[0] = wordArray[0].toLocaleUpperCase();

  const capitalizedWord = wordArray.join("");

  return capitalizedWord;
}
