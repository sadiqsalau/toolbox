import { splitProps, type JSX } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";

/** The variants of the button. */
export const buttonVariants = tv({
  base: [
    "inline-flex items-center gap-1.5",
    "rounded-full font-bold transition-colors",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700",
  ],
  variants: {
    variant: {
      primary: "bg-green-500 text-black hover:bg-green-600",
      secondary: [
        "bg-stone-700 text-stone-200",
        "hover:bg-stone-600 hover:text-green-400",
      ],
    },
    size: {
      sm: "px-4 py-1.5 text-sm",
      md: "px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

/** A link styled as a button. */
export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["class", "variant", "size"]);

  return (
    <a
      {...others}
      class={buttonVariants({
        variant: local.variant,
        size: local.size,
        class: local.class,
      })}
    />
  );
}
