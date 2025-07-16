import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      // your meta tags and site config
    ],
    links: [],
    // other head config
  }),
  component: () => (
    <>
      <Toaster position="top-center" />
      <Outlet />
    </>
  ),
});
