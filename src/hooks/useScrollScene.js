import { useEffect, useRef } from "react";
import { createRevealTimeline } from "../animation/scrollTrigger";

export function useScrollScene(buildTimeline, options = {}) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;

    if (!scope || typeof buildTimeline !== "function") {
      return undefined;
    }

    const timeline = createRevealTimeline(scope, {}, options);
    buildTimeline(timeline, scope);

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [buildTimeline, options]);

  return scopeRef;
}
