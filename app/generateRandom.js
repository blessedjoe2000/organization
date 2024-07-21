// getRandomProverb.js
export function getRandomProverb(proverbs) {
  if (!proverbs || proverbs.length === 0) {
    return null;
  }
  return proverbs[Math.floor(Math.random() * proverbs.length)];
}
