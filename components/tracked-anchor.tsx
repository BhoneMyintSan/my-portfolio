"use client";

import { track } from "@vercel/analytics";

type TrackedAnchorProps = React.ComponentProps<"a"> & {
  eventName: string;
  eventLabel?: string;
};

export function TrackedAnchor({ eventName, eventLabel, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track(eventName, eventLabel ? { label: eventLabel } : undefined);
        onClick?.(event);
      }}
    />
  );
}
