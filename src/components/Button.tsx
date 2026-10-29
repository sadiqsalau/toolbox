import { splitProps, type JSX } from "solid-js";

import { cn } from "../lib/utils";

type ButtonProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

/** A link styled as a button. */
export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <a
      {...others}
      class={cn(
        "inline-flex items-center gap-1.5",
        "rounded-full px-4 py-2 font-bold",
        "bg-green-500 text-black",
        "hover:bg-green-600 transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700",
        local.class,
      )}
    />
  );
}
