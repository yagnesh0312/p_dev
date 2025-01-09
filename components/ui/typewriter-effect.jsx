"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate("span", {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      }, {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
      });
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            (<div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
                  {char}
                </motion.span>
              ))}
            </div>)
          );
        })}
      </motion.div>)
    );
  };
  return (
    (<div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}>
      {renderWords()}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-full w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 mx-2 bg-blue-500",
          cursorClassName
        )}></motion.div>
    </div>)
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      (<div>
        {wordsArray.map((word, idx) => {
          return (
            (<div key={`word-${idx}`} className={cn(`md:py-2 md:px-3 px-1 inline-block`, word.className)}>
              {word.text.map((char, index) => (
                <span
                
                  key={`char-${index}`}
                  className={cn(``)}>
                  {char}
                </span>
              ))}
            </div>)
          );
        })}
      </div>)
    );
  };

  return (
    (<div className={cn("flex space-x-1 my-2", className)}>
      <motion.div
        className="overflow-hidden "
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}>
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}>
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block bg-gradient-to-r from-green-300 via-green-500 to-green-700 w-[30px] h-8 md:h-16 lg:h-20 mx-1",
          cursorClassName
        )}></motion.span>
    </div>)
  );
};
