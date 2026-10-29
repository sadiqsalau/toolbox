import { For } from "solid-js";

import Button from "./Button";
import { sections } from "../resources/links";
import { cn } from "../lib/utils";

/** The steps for getting the tools. */
const steps = [
  "Pick a tool below. AI and Online tools open in the browser.",
  "For an installer, open the downloaded file and follow the steps.",
  "Not sure which button? Pick 64-bit.",
];

/** The page header with the title, steps and section links. */
export default function Header() {
  return (
    <header class="flex flex-col items-center gap-6 text-center pt-8">
      {/* Title */}
      <div class="flex flex-col items-center gap-1">
        <h1
          class={cn(
            "text-5xl sm:text-6xl leading-tight",
            "font-fredoka-one text-green-300",
          )}
        >
          Toolbox
        </h1>
        <p class="text-sm uppercase tracking-wide text-stone-300">
          Tools for my classes ·{" "}
          <span class="whitespace-nowrap">
            by{" "}
            <a
              href="https://sadiqsalau.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-green-500 hover:underline"
            >
              Sadiq Salau
            </a>
          </span>
        </p>
      </div>

      {/* Steps */}
      <ol class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left">
        <For each={steps}>
          {(step, index) => (
            <li class="flex items-start gap-3 rounded-lg p-4 bg-stone-800">
              <span
                class={cn(
                  "size-7 flex-none rounded-full",
                  "flex items-center justify-center",
                  "bg-green-500 text-black font-bold",
                )}
              >
                {index() + 1}
              </span>
              <span class="min-w-0 text-sm text-stone-200">{step}</span>
            </li>
          )}
        </For>
      </ol>

      {/* Section links */}
      <nav aria-label="Sections" class="flex flex-wrap justify-center gap-2">
        <For each={sections}>
          {(section) => (
            <Button variant="secondary" size="sm" href={`#${section.category}`}>
              {section.title}
            </Button>
          )}
        </For>
      </nav>
    </header>
  );
}
