import { Sidebar as ShadcnSidebar } from "@/components/ui/sidebar";
import SidebarContent from "./Content";
import SidebarFooter from "./Footer";

export function Sidebar() {
  return (
    <ShadcnSidebar>
      <SidebarContent />
      <SidebarFooter />
    </ShadcnSidebar>
  );
}

export default Sidebar;
