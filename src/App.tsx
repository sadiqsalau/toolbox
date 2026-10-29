import { For } from "solid-js";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LinkCard from "./components/LinkCard";
import Section from "./components/Section";
import { links, sections } from "./resources/links";

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
    <div class="flex flex-col gap-10 max-w-5xl mx-auto p-4">
      <Header />
      <main class="flex flex-col gap-10">
        <For each={sections}>
          {(section) => (
            <Section
              id={section.category}
              title={section.title}
              description={section.description}
            >
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
      <Footer />
    </div>
  );
}
