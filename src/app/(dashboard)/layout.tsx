import { ChildrenProps } from "@/types/global";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="min-h-screen">
      {/* Dashboard Layout Wrapper */}
      {children}
    </div>
  );
};

export default DashboardLayout;
