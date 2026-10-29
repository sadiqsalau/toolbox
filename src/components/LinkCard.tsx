import { For, Show, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { IconTypes } from "solid-icons";
import { TbOutlineExternalLink } from "solid-icons/tb";

import Button from "./Button";
import type { LinkAction, ResourceLink } from "../resources/links";
import { platform } from "../lib/platform";
import { cn } from "../lib/utils";

interface LinkCardProps {
  link: ResourceLink;
  actionIcon: IconTypes;
  external: boolean;
}

/** A card for one program, extension or website. */
export default function LinkCard(props: LinkCardProps) {
  /** Whether an action is for a platform other than the highlighted one. */
  const isOtherPlatform = (action: LinkAction) => {
    const selected = platform();

    return (
      action.platform !== undefined &&
      selected !== undefined &&
      action.platform !== selected
    );
  };

  /** The actions, with the highlighted platform's first. */
  const sortedActions = createMemo(() =>
    [...props.link.actions].sort(
      (a, b) => Number(isOtherPlatform(a)) - Number(isOtherPlatform(b)),
    ),
  );

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
        {/* Name and description */}
        <h3 class="font-fredoka-one wrap-break-word">{props.link.name}</h3>
        <p class="text-sm text-stone-300">{props.link.description}</p>

        {/* Note */}
        <Show when={props.link.note}>
          <p class="text-sm text-green-300">{props.link.note}</p>
        </Show>

        {/* Actions */}
        <div class="flex flex-wrap gap-2 pt-1">
          {/* Action buttons */}
          <For each={sortedActions()}>
            {(action) => (
              <Button
                variant={isOtherPlatform(action) ? "muted" : "primary"}
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

          {/* Website */}
          <Show when={props.link.website}>
            {(website) => (
              <Button
                variant="secondary"
                href={website()}
                aria-label={`${props.link.name} official website`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbOutlineExternalLink class="size-4" />
                Website
              </Button>
            )}
          </Show>
        </div>
      </div>
    </div>
  );
}
