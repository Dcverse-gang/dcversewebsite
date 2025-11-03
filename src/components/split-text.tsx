// "use client";

// import { useSprings, animated } from "@react-spring/web";
// import { useEffect, useRef, useState } from "react";
// import type { CSSProperties, FC } from "react";

// interface SplitTextProps {
//   text?: string;
//   className?: string;
//   delay?: number;
//   animationFrom?: { opacity: number; transform: string };
//   animationTo?: { opacity: number; transform: string };
//   threshold?: number;
//   rootMargin?: string;
//   textAlign?: "left" | "right" | "center" | "justify";
//   onLetterAnimationComplete?: () => void;
// }

// export const SplitText: FC<SplitTextProps> = ({
//   text = "",
//   className = "",
//   delay = 100,
//   animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
//   animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
//   threshold = 0.1,
//   rootMargin = "-100px",
//   textAlign = "center",
//   onLetterAnimationComplete,
// }) => {
//   const words = text.split(" ").map((word) => word.split(""));
//   const letters = words.flat();
//   const [inView, setInView] = useState(false);
//   const ref = useRef<HTMLParagraphElement>(null);
//   const animatedCount = useRef(0);

//   useEffect(() => {
//     const currentRef = ref.current;
//     if (!currentRef) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(currentRef);
//         }
//       },
//       { threshold, rootMargin }
//     );

//     observer.observe(currentRef);

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, [threshold, rootMargin]);

//   const springs = useSprings(
//     letters.length,
//     letters.map((_, i) => ({
//       from: animationFrom,
//       to: inView ? animationTo : animationFrom,
//       delay: i * delay,
//       config: {
//         tension: 170,
//         friction: 26,
//       },
//       onRest: () => {
//         animatedCount.current += 1;
//         if (animatedCount.current === letters.length && onLetterAnimationComplete) {
//           onLetterAnimationComplete();
//         }
//       },
//     }))
//   );

//   const textStyle: CSSProperties = {
//     textAlign,
//     whiteSpace: "normal",
//     wordWrap: "break-word",
//   };

//   return (
//     <p ref={ref} className={`split-parent overflow-hidden inline ${className}`} style={textStyle}>
//       {words.map((word, wordIndex) => (
//         <span key={`word-${wordIndex}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
//           {word.map((letter, letterIndex) => {
//             const index =
//               words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex;

//             return (
//               <animated.span
//                 key={`letter-${index}`}
//                 style={springs[index]}
//                 className="inline-block will-change-transform"
//               >
//                 {letter === " " ? "\u00A0" : letter}
//               </animated.span>
//             );
//           })}
//           {wordIndex < words.length - 1 && (
//             <span style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>
//           )}
//         </span>
//       ))}
//     </p>
//   );
// };