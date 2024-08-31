export default function Footer() {
  return (
    <>
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
          <section className="mt-4">
            <p className="text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
              Friendly Links:{" "}
              <a
                href="https://enblog.top"
                target="_blank"
                className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
              >
                个人博客
              </a>
              ,{" "}
              <a
                href="https://panel.vvv.vg"
                target="_blank"
                className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
              >
                机场
              </a>
              ,{" "}
              <a
                href="https://nezha.uk"
                target="_blank"
                className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
              >
                哪吒探针
              </a>
            </p>
          </section>
        </section>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function fetchData() {
              fetch('https://nezha.uk/ipinfo.php')
                .then(response => response.json())
                .then(data => {
                  document.getElementById('cf-country').textContent = data.cf_node_country;
                  document.getElementById('cf-city').textContent = data.cf_node_city;
                  document.getElementById('cf-ip').textContent = data.cf_node;
                  document.getElementById('cf-flag').src = \`https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/\${data.cf_node_country_code}.svg\`;

                  document.getElementById('user-country').textContent = data.user_country;
                  document.getElementById('user-city').textContent = data.user_city;
                  document.getElementById('user-ip').textContent = data.user_ip;
                  document.getElementById('user-flag').src = \`https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/\${data.user_country_code}.svg\`;
                });
            }

            fetchData();
          `,
        }}
      />
      <script
        defer
        src="https://umami.analyze.ng/script.js"
        data-website-id="5be694d7-d3bb-4358-8ebf-1d859dbc9c90"
      ></script>
    </>
  );
}
