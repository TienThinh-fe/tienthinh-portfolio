import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landing, Contact, Work } from "./components";
import useStore from "./store";

function App() {
  const theme = useStore((state) => state.theme);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className={`loading loading__${theme}`}
          key="modal"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="loading__text">Welcome</motion.div>
        </motion.div>
      ) : (
        <div className={`App App--${theme}`}>
          {isLoading ? (
            <div className={`loading loading__${theme}`}>
              <div className="loading__text">Welcome</div>
            </div>
          ) : null}
          <Landing />
          <Work />
          <Contact />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
