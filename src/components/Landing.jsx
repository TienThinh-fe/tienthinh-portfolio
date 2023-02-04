import { LandingContent } from "./LandingContent";
import { Scene } from "./Scene";

export function Landing() {
  return (
    <div className="landing">
      <div className="landing__container">
        <LandingContent />
        <Scene />
      </div>
    </div>
  );
}
