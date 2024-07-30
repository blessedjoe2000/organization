import Brief from "./component/Brief/Brief";
import FlashAlert from "./component/FlashAlert/FlashAlert";
import Proverbs from "./component/Proverbs/Proverbs";
import ShortNote from "./component/ShortNote/ShortNote";
import Slider from "./component/Slider/Slider";
import { getProverbs, getRandomProverb } from "./lib/getProverbs";

export default function Home() {
  const proverbs = getProverbs();
  const initialProverb = getRandomProverb(proverbs);
  return (
    <main>
      <FlashAlert />
      <Slider />
      <Brief />
      <Proverbs initialProverb={initialProverb} />
      <ShortNote />
    </main>
  );
}
