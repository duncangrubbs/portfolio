import { useEffect, useRef } from "react";

const ScrollTracker = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (event: any) => {
    const limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    // Do some math
    const diff = limit - document.documentElement.clientHeight;
    const diffPercent = diff / limit;
    const percent =
      event.target.scrollingElement.scrollTop / (limit * diffPercent);
    const pixCalc = document.documentElement.clientWidth * percent;

    // Update the width
    if (ref.current) {
      ref.current.style.width = `${pixCalc}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={ref} className="fixed z-10 top-0 h-2 bg-emerald-600" />;
};

export default ScrollTracker;
