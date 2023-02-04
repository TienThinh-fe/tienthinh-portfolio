import { LandingButton } from "./LandingButton";
import { Theme } from "./Theme";
import useStore from "../store";

export function LandingContent() {
  const contactRef = useStore((state) => state.contactRef);

  function handleScrollToContact() {
    contactRef.current.scrollIntoView();
  }

  return (
    <div className="landing--content">
      <Theme />
      <div className="landing--content__subtitle">
        <span>Hello, I am</span>
      </div>
      <div className="landing--content__title">
        <span>
          Hoang <br />
          Tien Thinh
        </span>
      </div>
      <div className="landing--content__about">
        <span>
          A senior student at FPT University Da Nang.
          <br />
          Currently developing thoughtful interfaces and opening to work.
        </span>
      </div>
      <div className="landing--content__button">
        <LandingButton name="Work and Experience" />
        <LandingButton name="Contact" handleClick={handleScrollToContact} />
      </div>
    </div>
  );
}
