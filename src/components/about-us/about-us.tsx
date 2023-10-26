import { AboutUsDroneVideo } from './about-us-drone-video';
import { AboutUsText } from './about-us-text';

export default function AboutUs() {
  return (
    <div className="flex flex-col py-16 px-10 gap-20 md:px-20 w-full justify-center items-center md:justify-between">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex items-center justify-center w-full h-full lg:w-1/2">
          <AboutUsDroneVideo />
        </div>
        <AboutUsText />
      </div>
    </div>
  );
}
