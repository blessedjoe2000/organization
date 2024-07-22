// getRandomProverb.js
export function getRandomProverb(proverbs) {
  if (!proverbs || proverbs.length === 0) {
    return null;
  }
  console.log("proverbs length in generate proverbs :>> ", proverbs.length);
  return proverbs[Math.floor(Math.random() * proverbs.length)];
}
