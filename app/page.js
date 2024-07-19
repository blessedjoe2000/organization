import Brief from "./component/Brief/Brief";
import FlashAlert from "./component/FlashAlert/FlashAlert";
import Slider from "./component/Slider/Slider";

export default function Home() {
  return (
    <main className="">
      <FlashAlert />
      <Slider />
      <Brief />
    </main>
  );
}
