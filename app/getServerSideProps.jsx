import { getRandomProverb } from "./generateRandom";

export default function getServerSideProps() {
  const initialProverb = getRandomProverb(proverbs);
  console.log("initialProverb in get serverside :>> ", initialProverb);
  return { props: { initialProverb: initialProverb || proverbs[0] } };
}
