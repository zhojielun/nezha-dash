import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://umami.analyze.ng/script.js";
    script.defer = true;
    script.setAttribute("data-website-id", "5be694d7-d3bb-4358-8ebf-1d859dbc9c90");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <p className="mt-3 flex gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          Find the code on{" "}
          <a
            href="https://github.com/zhojielun/nezha-dash"
            target="_blank"
            className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
          >
            GitHub
          </a>
        </p>
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © 2020-{new Date().getFullYear()}{" "}
          <a href={"https://github.com/zhojielun"}>@zhojielun</a>
        </section>
      </section>
    </footer>
  );
}
