import type { ParentProps } from "solid-js";

/** The heading of a page section. */
export default function SectionHeading(props: ParentProps) {
  return (
    <h2 class="text-3xl font-fredoka-one text-green-500">{props.children}</h2>
  );
}
