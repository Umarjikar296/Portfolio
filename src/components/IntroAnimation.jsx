"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(
    () => ["Hello", "Hallo", "Hola", "Bonjour", "Привет"],
    []
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // show each greeting briefly, then move to next
    if (index < greetings.length - 1) {
      const id = setTimeout(() => setIndex((i) => i + 1), 350);
      return () => clearTimeout(id);
    }

    // after last greeting, hide overlay (triggers exit animation)
    const done = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(done);
  }, [index, greetings.length]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999] flex justify-center items-center text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.18 }}
            >
              {greetings[index]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
