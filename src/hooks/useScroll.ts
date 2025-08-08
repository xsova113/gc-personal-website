import { useEffect } from "react";
import { useScrollStore } from "./useScrollStore";

export const useScroll = () => {
  const show = useScrollStore((state) => state.show);
  const setShow = useScrollStore((state) => state.setShow);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function () {
      // Get the new Value
      currentScrollPosition = window.scrollY;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, [setShow]);

  return show;
};
