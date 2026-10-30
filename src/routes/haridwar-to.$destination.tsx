import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { HARIDWAR_ROUTE_MAP } from "@/data/seo";

// Legacy /haridwar-to/<destination> URLs now live under /routes/<from>-to-<to>.
// This route permanently forwards them so old links keep working.
export const Route = createFileRoute("/haridwar-to/$destination")({
  loader: ({ params }) => {
    const pair = HARIDWAR_ROUTE_MAP[params.destination];
    if (!pair) throw notFound();
    throw redirect({ to: "/routes/$pair", params: { pair }, replace: true });
  },
  head: () => ({
    meta: [
      { title: "Moved — SHIFT8 Movers & Packers" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});
