import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef(); // useRef to select the modal div component

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      // add click event on area outside the modal to close modal, only at event capturing phase but not bubbling phase
      document.addEventListener("click", handleClick, listenCapturing);

      // clean up the event when modal unmount
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
