import { AppSidebar } from "./app-sidebar";
import { DashboardNavbar } from "./dashboard-navbar";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <div
      className="
        flex
        h-screen
        overflow-hidden
        bg-[#020817]
      "
    >
      <AppSidebar />

      <div
        className="
          flex
          flex-1
          flex-col
        "
      >
        <DashboardNavbar />

        <main
          className="
            flex-1
            overflow-y-auto
            p-6
            lg:p-8
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}