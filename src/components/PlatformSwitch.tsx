import { For } from "solid-js";

import { buttonVariants } from "./Button";
import { Platform, platform, setPlatform } from "../lib/platform";

/** The platform options of the switch. */
const options = [
  { value: Platform.Windows, label: "Windows" },
  { value: Platform.MacOS, label: "macOS" },
];

/** A switch for choosing which platform's installers are highlighted. */
export default function PlatformSwitch() {
  return (
    <div
      role="group"
      aria-label="Downloads for"
      class="flex flex-wrap items-center gap-2"
    >
      {/* Label */}
      <span class="text-sm text-stone-300">Downloads for:</span>

      {/* Options */}
      <For each={options}>
        {(option) => (
          <button
            type="button"
            aria-pressed={platform() === option.value}
            onClick={() => setPlatform(option.value)}
            class={buttonVariants({
              variant: platform() === option.value ? "primary" : "secondary",
              size: "sm",
              class: "cursor-pointer",
            })}
          >
            {option.label}
          </button>
        )}
      </For>
    </div>
  );
}
