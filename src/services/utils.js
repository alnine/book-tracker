const doCapitalize = string => {
  const words = string.split(" ");
  const capitalizeWords = [];
  for (let word of words) {
    const temp = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizeWords.push(temp);
  }
  return capitalizeWords.join(" ");
};

export default {
  doCapitalize
};
