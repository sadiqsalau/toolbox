import type { ParentProps } from "solid-js";

import SectionHeading from "./SectionHeading";

type SectionProps = ParentProps<{
  id: string;
  title: string;
  description: string;
}>;

/** A titled section of the page. */
export default function Section(props: SectionProps) {
  return (
    <section id={props.id} class="flex flex-col gap-4 scroll-mt-4">
      {/* Heading */}
      <div class="flex flex-col gap-1">
        <SectionHeading>{props.title}</SectionHeading>
        <p class="text-sm text-stone-300">{props.description}</p>
      </div>

      {/* Content */}
      {props.children}
    </section>
  );
}
