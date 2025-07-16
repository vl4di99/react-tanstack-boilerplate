import Sidebar from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)")({
  component: AppLayout,
});

export default function AppLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SidebarProvider>
        <Sidebar />
        <main>
          <SidebarTrigger className="cursor-pointer" />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
