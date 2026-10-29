import { For, Show } from "solid-js";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LinkCard from "./components/LinkCard";
import PlatformNotice from "./components/PlatformNotice";
import PlatformSwitch from "./components/PlatformSwitch";
import Section from "./components/Section";
import { links, sections } from "./resources/links";
import { cn } from "./lib/utils";

/** The links of each section, keyed by category. */
const linksByCategory = new Map(
  sections.map((section) => [
    section.category,
    links.filter((link) => link.category === section.category),
  ]),
);

/** The downloads page. */
export default function App() {
  return (
    <div
      class={cn(
        "flex flex-col gap-10",
        "w-full max-w-7xl mx-auto",
        "p-4 sm:p-6 lg:p-8",
      )}
    >
      {/* Header */}
      <Header />

      {/* Sections */}
      <main class="flex flex-col gap-10">
        <For each={sections}>
          {(section) => (
            <Section
              id={section.category}
              title={section.title}
              description={section.description}
            >
              {/* Platform notice and switch */}
              <Show when={section.showPlatform}>
                <PlatformNotice />
                <PlatformSwitch />
              </Show>

              {/* Links */}
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <For each={linksByCategory.get(section.category)}>
                  {(link) => (
                    <LinkCard
                      link={link}
                      actionIcon={section.actionIcon}
                      external={section.external}
                    />
                  )}
                </For>
              </div>
            </Section>
          )}
        </For>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
