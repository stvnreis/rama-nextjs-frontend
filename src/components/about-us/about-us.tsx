import { AboutUsDroneVideo } from './about-us-drone-video';
import { AboutUsText } from './about-us-text';

export default function AboutUs() {
  return (
    <div className="mt-10 flex flex-col w-full h-full lg:flex-row gap-20 justify-center items-center">
      <div className="flex w-full lg:w-1/2 min-h-full items-center justify-center">
        <AboutUsDroneVideo />
      </div>
      <div className="w-full lg:w-1/2">
        <AboutUsText />
      </div>
    </div>
  );
}
