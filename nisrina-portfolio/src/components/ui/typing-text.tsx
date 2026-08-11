"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  delay?: number;
  startOnView?: boolean;
  showCursor?: boolean;
  onComplete?: () => void;
};

type WordRevealTextProps = {
  text: string;
  active?: boolean;
  delay?: number;
};

type TypingStatementProps = {
  headline: string;
  body: string;
  headlineClassName?: string;
  bodyClassName?: string;
};

export function TypingText({
  text,
  speed = 50,
  delay = 0,
  startOnView = false,
  showCursor = true,
  onComplete,
}: TypingTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const hasCompletedRef = useRef(Boolean(reduceMotion));

  const shouldStart = reduceMotion || !startOnView || isInView;
  const displayedCharacters = reduceMotion ? text.length : visibleCharacters;
  const cursorIsVisible = showCursor && !reduceMotion && !isComplete;

  useEffect(() => {
    if (!shouldStart) return;

    if (reduceMotion) {
      const completeTimer = window.setTimeout(() => {
        hasCompletedRef.current = true;
        onComplete?.();
      }, 0);

      return () => window.clearTimeout(completeTimer);
    }

    hasCompletedRef.current = false;
    let typingTimer: number | undefined;

    const startTimer = window.setTimeout(() => {
      let index = 0;

      typingTimer = window.setInterval(() => {
        index += 1;
        setVisibleCharacters(index);

        if (index >= text.length) {
          window.clearInterval(typingTimer);
          setIsComplete(true);
          if (!hasCompletedRef.current) {
            hasCompletedRef.current = true;
            onComplete?.();
          }
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (typingTimer) {
        window.clearInterval(typingTimer);
      }
    };
  }, [delay, onComplete, reduceMotion, shouldStart, speed, text]);

  return (
    <span ref={ref} className="relative grid">
      <span aria-hidden="true" className="col-start-1 row-start-1 invisible">
        {text}
      </span>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="col-start-1 row-start-1">
        {text.slice(0, displayedCharacters)}
        {cursorIsVisible ? (
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0.25, 0.85, 0.25] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="ml-0.5 inline-block w-px translate-y-0.5 bg-maroon-800 align-baseline dark:bg-maroon-300"
            style={{ height: "0.95em" }}
          />
        ) : null}
      </span>
    </span>
  );
}

export function WordRevealText({ text, active = false, delay = 0 }: WordRevealTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const shouldReveal = reduceMotion || active;

  return (
    <span className="relative grid">
      <span aria-hidden="true" className="col-start-1 row-start-1 invisible">
        {text}
      </span>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="col-start-1 row-start-1">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(3px)" }}
              animate={shouldReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : delay + index * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </span>
  );
}

export function TypingStatement({
  headline,
  body,
  headlineClassName,
  bodyClassName,
}: TypingStatementProps) {
  const reduceMotion = useReducedMotion();
  const [bodyIsReady, setBodyIsReady] = useState(Boolean(reduceMotion));
  const bodyShouldReveal = bodyIsReady || Boolean(reduceMotion);

  const revealBody = useCallback(() => {
    window.setTimeout(() => setBodyIsReady(true), reduceMotion ? 0 : 420);
  }, [reduceMotion]);

  return (
    <>
      <p className={headlineClassName}>
        <TypingText text={headline} speed={54} startOnView showCursor onComplete={revealBody} />
      </p>
      <motion.p
        className={bodyClassName}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={bodyShouldReveal ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <WordRevealText text={body} active={bodyShouldReveal} />
      </motion.p>
    </>
  );
}
