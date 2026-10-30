import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { cityForDestination } from "@/data/seo";

// Legacy /haridwar-to/<destination> URLs now live under /packers-and-movers/<city>.
// This route permanently forwards them so old links keep working.
export const Route = createFileRoute("/haridwar-to/$destination")({
  loader: ({ params }) => {
    const city = cityForDestination(params.destination);
    if (!city) throw notFound();
    throw redirect({
      to: "/packers-and-movers/$city",
      params: { city: city.slug },
      replace: true,
    });
  },
  head: () => ({
    meta: [
      { title: "Moved — SHIFT8 Movers & Packers" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});
