"use client";

import clsx from "clsx";
import { useState } from "react";

export const Button1 = ({
  text,
  link,
  as = "a",
  bg = "black",
}: {
  text: string;
  link?: string;
  as?: "a" | "button";
  bg?: "black" | "white";
}) => {
  const content = (
    <>
      <span className="relative z-10 text-[12px] sm:text-[16px]">{text}</span>

      {/* Gradient layer: sky blue → purple → pink → red → orange */}
      <span
        aria-hidden
        className="absolute inset-0 -z-0 bg-[linear-gradient(60deg,_#22D3EE_0%,_#8B5CF6_25%,_#EC4899_50%,_#EF4444_75%,_#F59E0B_100%)] opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-opacity"
      />

      {/* Base black sheen */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 ${bg == "black" ? "bg-[linear-gradient(110deg,_#000_25%,_#111_50%,_#000_75%)]" : "bg-[linear-gradient(110deg,_#fff_25%,_#fff_50%,_#fff_75%)]"}  bg-[length:200%_100%] opacity-100 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]`}
      />

      {/* Glow layer matching the gradient hues */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[-20%] -z-10 bg-[linear-gradient(90deg,_#22D3EE00,_#22D3EE66_10%,_#8B5CF666_40%,_#EC489966_60%,_#EF444466_80%,_#F59E0B00_100%)] blur-2xl opacity-0 transition-opacity duration-700 ease-out will-change-opacity"
      />
    </>
  );

  const classes = `hero-btn cursor-pointer group relative inline-flex items-center justify-center rounded-full px-4 sm:px-7 py-3 sm:py-4 uppercase font-semibold tracking-wide ${bg == "black" ? "text-white" : "text-black"} dark:text-white bg-white dark:bg-black ring-1 ring-black/10 dark:ring-white/10 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden will-change-transform`;
  if (as === "button") {
    return <button className={classes}>{content}</button>;
  }
  // default anchor
  return (
    <a href={link} className={classes}>
      {content}
    </a>
  );
};

export const Button2 = ({
  text,
  type = "submit",
  ...props
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  [key: string]: any;
}) => {
  return (
    <button
      type={type}
      className="py-2 px-4 cursor-pointer mt-3 md:mt-4 bg-cyan-500 text-black text-base md:text-lg font-semibold transform transition-all hover:bg-cyan-400 hover:shadow-cyan-500/50 hover:font-bold disabled:bg-gray-400"
      {...props}
    >
      {text}
    </button>
  );
};

interface Button3Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  base?: "white" | "black";
}

export function Button3({
  text = "Button 3",
  base = "white",
  className,
  children,
  ...props
}: Button3Props) {
  const baseBtn =
    "button3 relative inline-block uppercase min-w-[150px] max-w-[250px] px-6 py-3 font-bold text-[16px] " +
    "align-middle cursor-pointer transition-all duration-500 ease-out " +
    "border-[4px] bg-transparent focus:outline-none isolate"; // isolate for stacking

  const theme =
    base === "black" ? "text-black border-black" : "text-white border-white";

  const classes = clsx(baseBtn, theme, className);

  return (
    <button className={classes} {...props}>
      <span className="relative z-10">{children ?? text}</span>
    </button>
  );
}

interface Button4Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  defaultActive?: boolean;
}

export function Button4({
  text = "Button 4",
  defaultActive = true,
  className = "",
  ...props
}: Button4Props) {
  const [active, setActive] = useState(defaultActive);

  const toggle = () => setActive((v) => !v);

  return (
    <div
      className={`button4-container ${!active ? "active" : ""} ${className}`}
    >
      <button
        onMouseDown={toggle}
        onMouseUp={toggle}
        className={`${!active ? "active" : ""} ${className}`}
        {...props}
      >
        {text}
      </button>
    </div>
  );
}

export function Button5({
  text = "Button 5",
  color = "cyan",
  className = "",
  btnClassName = "",
  ...props
}: {
  text?: string;
  color?: "cyan" | "gradient";
  className?: string;
  btnClassName?: string;
  [key: string]: any;
}) {
  return (
    <div className={`bth-5 ${color} ${className}`} {...props}>
      <div className="btn-inner">
        <button className={`cursor-pointer ${btnClassName}`}>{text}</button>
      </div>
    </div>
  );
}

interface Button6Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function Button6({
  text = "Button 6",
  className,
  ...props
}: Button6Props) {
  return (
    <button
      {...props}
      className={clsx(
        "button6 relative inline-flex items-center justify-center px-7 py-3.5 font-semibold",
        "rounded-full bg-white/10 backdrop-blur-xl text-white",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.45)]",
        "transition-transform duration-200 hover:-translate-y-[1px] active:translate-y-[0px]",
        "isolate",
        className,
      )}
    >
      <span className="relative z-10 drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">
        {text}
      </span>
    </button>
  );
}

interface Button7Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  dark?: boolean;
}

export function Button7({
  text = "Button 7",
  dark = true,
  className,
  ...props
}: Button7Props) {
  const sizeMap =
    "sm:text-[12px] sm:px-4 sm:py-2 md:text-[14px] md:px-5 md:py-3 lg:text-[16px] lg:px-6 lg:py-3.5";

  return (
    <button
      {...props}
      className={clsx(
        // outer wrapper creates the animated gradient border
        "relative rounded-full cursor-pointer border-white border inline-flex items-center justify-center font-semibold uppercase tracking-wide before:rounded-full",
        sizeMap,
        "transition-transform duration-200 hover:-translate-y-[1px]",
        "before:absolute before:inset-0 before:rounded-inherit " +
          // gradient border layer: big background to allow movement
          "before:bg-[conic-gradient(from_0deg,#22D3EE,#8B5CF6,#EC4899,#EF4444,#F59E0B,#22D3EE)] before:[background-size:200%_200%] " +
          // mask so only border shows (8px)
          "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude] before:p-[2px]",
        // animate on hover
        "hover:before:animate-[spinBorder_2s_linear_infinite]",
        // inner fill
        "bg-white text-black",
        dark && "bg-black text-white",
        // elevation
        "shadow-sm",
        "text-[12px] px-4 py-2",
        className,
      )}
    >
      {/* inner content uses padding to create the border gap */}
      <span className="relative z-">{text}</span>​
    </button>
  );
}
