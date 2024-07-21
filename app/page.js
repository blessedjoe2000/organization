import Brief from "./component/Brief/Brief";
import FlashAlert from "./component/FlashAlert/FlashAlert";
import Proverbs from "./component/Proverbs/Proverbs";
import ShortNote from "./component/ShortNote/ShortNote";
import Slider from "./component/Slider/Slider";

export default function Home({ initialProverb }) {
  return (
    <main className="">
      <FlashAlert />
      <Slider />
      <Brief />
      <Proverbs initialProverb={initialProverb} />
      <ShortNote />
    </main>
  );
}
