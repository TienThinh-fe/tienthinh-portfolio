import { LandingContent } from "./LandingContent";
import { Scene } from "./Scene";
import { MouseScroll } from "./MouseScroll";

export function Landing() {
  return (
    <div className="landing">
      <div className="landing__container">
        <LandingContent />
        <Scene />
      </div>
      <MouseScroll />
    </div>
  );
}
