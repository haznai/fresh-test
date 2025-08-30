export function Header() {
  return (
    <header class="relative z-10">
      <div class="flex h-[2.95rem] border-b-md border-black">
        <div class="w-[33%]"></div>
        {/* hazn logo */}
        <img
          class="flex-none h-24 pointer-events-none"
          src="/header/hazn_logo.svg"
          alt="logo saying hazn in fancy way"
        />
        {/* as above, so below */}
        <div class="inline-flex flex-none items-center pr-4 -ml-8 font-serif">
          <span>as above, so below</span>

          <img
            class="h-5 pointer-events-none"
            src="/header/sparkles.svg"
          >
          </img>
        </div>
      </div>
    </header>
  );
}
