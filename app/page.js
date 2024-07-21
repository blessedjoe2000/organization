import Brief from "./component/Brief/Brief";
import FlashAlert from "./component/FlashAlert/FlashAlert";
import ShortNote from "./component/ShortNote/ShortNote";
import Slider from "./component/Slider/Slider";

export default function Home() {
  return (
    <main className="">
      <FlashAlert />
      <Slider />
      <Brief />
      <ShortNote />
    </main>
  );
}
