import { Match, Switch, type ParentProps } from "solid-js";
import { TbOutlineInfoCircle } from "solid-icons/tb";

import { Device, device } from "../lib/platform";
import { cn } from "../lib/utils";

/** A notice for devices that can't run the installers. */
export default function PlatformNotice() {
  return (
    <Switch>
      {/* Phone or tablet */}
      <Match when={device === Device.Mobile}>
        <Notice>
          On a phone or tablet? These installers need a laptop. Use the{" "}
          <a href="#online" class="text-green-500 hover:underline">
            Online
          </a>{" "}
          tools instead: OnlineGDB for Python, and W3Schools Tryit for HTML.
        </Notice>
      </Match>

      {/* Chromebook */}
      <Match when={device === Device.ChromeOS}>
        <Notice>
          Chromebooks can't run these installers. Use the{" "}
          <a href="#online" class="text-green-500 hover:underline">
            Online
          </a>{" "}
          tools instead: OnlineGDB for Python, C and C++, and W3Schools Tryit
          for HTML.
        </Notice>
      </Match>
    </Switch>
  );
}

/** A highlighted message box. */
function Notice(props: ParentProps) {
  return (
    <p
      role="status"
      class={cn(
        "flex items-start gap-2",
        "rounded-lg p-4 text-sm",
        "bg-green-900 text-green-100",
      )}
    >
      {/* Icon */}
      <TbOutlineInfoCircle class="size-5 flex-none" />

      {/* Message */}
      <span class="min-w-0">{props.children}</span>
    </p>
  );
}
