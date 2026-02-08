import { Container } from "@mui/material";
import Brief from "./component/Brief/Brief";
import Proverbs from "./component/Proverbs/Proverbs";
import ShortNote from "./component/ShortNote/ShortNote";
import Slider from "./component/Slider/Slider";
import { getProverbs, getRandomProverb } from "./lib/getProverbs";
import PopUpImage from "./component/PopUpImage/PopUpImage";

export default function Home() {
  const proverbs = getProverbs();
  const initialProverb = getRandomProverb(proverbs);
  return (
    <main>
      <Container>
        {/* <PopUpImage /> */}
        <Slider />
        <Brief />
        <Proverbs initialProverb={initialProverb} />
        <ShortNote />
      </Container>
    </main>
  );
}
