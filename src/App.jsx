import { useState, useEffect, useLayoutEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { Landing, Contact, Work } from "./components";
import useStore from "./store";

function App() {
  const theme = useStore((state) => state.theme);
  const [loading, setLoading] = useState(true);
  const pageRef = useRef();
  const textRef = useRef();
  const [ctx, setCtx] = useState(gsap.context(() => {}));

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    ).fromTo(
      textRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    ctx.add("endLoading", () => {
      gsap.to(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setLoading(false),
      });
    });

    return () => {
      tl.kill();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      ctx.endLoading();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Suspense>
          <div className={`loading loading__${theme}`} ref={pageRef}>
            <div className="loading__text" ref={textRef}>
              Welcome
            </div>
          </div>
        </Suspense>
      ) : (
        <div className={`App App--${theme}`}>
          {loading ? (
            <div className={`loading loading__${theme}`} ref={pageRef}>
              <div className="loading__text" ref={textRef}>
                Welcome
              </div>
            </div>
          ) : null}
          <Landing />
          <Work />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
