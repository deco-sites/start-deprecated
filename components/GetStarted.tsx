import { JSONSchema7 } from "https://esm.sh/v92/@types/json-schema@7.0.11/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjEwLjY/index.d.ts";

const isDeployment = Deno.env.get("DENO_DEPLOYMENT_ID");

export const schema: JSONSchema7 = {
  title: "Get Started",
  type: "object",
  properties: {
    enableInspectVSCode: {
      title: "Enable InspectVSCode",
      type: "boolean",
      default: false,
    },
  },
};

interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted({ enableInspectVSCode }: Props) {
  return (
    <section class="pt-20 pb-32">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="bg-decogreen p-1 mx-auto max-w-max overflow-hidden rounded-full">
              <img
                class="object-cover rounded-full"
                src="/android-chrome-512x512.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="md:max-w-md">
              <h2 class="mb-3 font-heading font-bold text-decogreen text-6xl sm:text-7xl">
                Welcome to Live!
              </h2>
              <p class="mb-4 text-lg">
                Create a new page by visiting it — try the root URL /
              </p>
              {enableInspectVSCode && !isDeployment && (
                <p class="mb-8 text-lg border border-dashed border-gray-300">
                  <span class="italic">PROTIP:</span>{" "}
                  Hit backtick (`) and click on any part of this page to
                  navigate to the code in VSCode automatically. Hit ESC to exit
                  inspect mode.
                </p>
              )}
              <div class="group relative md:max-w-max mb-5 ">
                <a
                  href="/"
                  class="p-1 w-full font-heading font-semibold  text-xs text-primary uppercase overflow-hidden"
                >
                  <div class="relative py-5 px-14 bg-primary-dark overflow-hidden rounded-lg">
                    <div class="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full bg-decogreen transition ease-in-out duration-500">
                    </div>
                    <p class="relative z-10 group-hover:text-primary-light">
                      Go to root page
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
