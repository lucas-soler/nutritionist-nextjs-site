export const capitalizeSentence = (sentence: string) =>
  sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1);

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
