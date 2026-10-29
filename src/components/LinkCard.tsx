import { For, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { IconTypes } from "solid-icons";

import Button from "./Button";
import type { ResourceLink } from "../resources/links";
import { cn } from "../lib/utils";

interface LinkCardProps {
  link: ResourceLink;
  actionIcon: IconTypes;
  external: boolean;
}

/** A card for one program, extension or website. */
export default function LinkCard(props: LinkCardProps) {
  return (
    <div class={cn("flex gap-2.5 min-w-0", "rounded-lg p-4", "bg-stone-800")}>
      {/* Icon */}
      <div
        class={cn(
          "size-10 flex-none rounded-md",
          "flex items-center justify-center",
          "bg-stone-700 text-green-400",
        )}
      >
        <Dynamic component={props.link.icon} class="size-6" />
      </div>

      {/* Details */}
      <div class="min-w-0 flex-1 flex flex-col gap-1.5">
        <h3 class="font-fredoka-one wrap-break-word">{props.link.name}</h3>
        <p class="text-sm text-stone-300">{props.link.description}</p>
        <Show when={props.link.note}>
          <p class="text-sm text-green-300">{props.link.note}</p>
        </Show>

        {/* Actions */}
        <div class="flex flex-wrap gap-2 pt-1">
          <For each={props.link.actions}>
            {(action) => (
              <Button
                href={action.href}
                aria-label={`${props.link.name}: ${action.label}`}
                target={props.external ? "_blank" : undefined}
                rel={props.external ? "noopener noreferrer" : undefined}
              >
                <Dynamic component={props.actionIcon} class="size-4" />
                {action.label}
              </Button>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
