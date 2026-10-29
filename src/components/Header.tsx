/** The page header with the class title and install steps. */
export default function Header() {
  return (
    <header class="flex flex-col items-center gap-3 text-center py-8">
      <h1 class="text-6xl font-fredoka-one leading-tight text-green-300">
        JET Club
      </h1>
      <p class="text-sm uppercase tracking-wide text-stone-300">
        Python & HTML
      </p>
      <ol class="flex flex-col gap-1 text-stone-200 list-decimal list-inside">
        <li>Download the installers below.</li>
        <li>Open each file and follow the steps.</li>
        <li>Not sure? Pick 64-bit.</li>
      </ol>
    </header>
  );
}
