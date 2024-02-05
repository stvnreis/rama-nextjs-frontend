import { AboutUsDroneVideo } from './about-us-drone-video';
import { AboutUsText } from './about-us-text';

export default function AboutUs() {
  return (
    <div className="mt-14 gap-20 md:px-20 w-full">
      <div className="flex flex-col lg:flex-row gap-10 px-10">
        <div className="flex items-center justify-center lg:w-1/2">
          <AboutUsDroneVideo />
        </div>
        <AboutUsText />
      </div>
    </div>
  );
}
