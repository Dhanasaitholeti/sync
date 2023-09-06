import SideBar from "../SideBar";
import TopBar from "../TopBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-[100vh] grid grid-cols-6">
        <SideBar />
        <div className=" col-span-5 grid grid-rows-10">
          <div className="bg-red-400">
            <TopBar />
          </div>
          <main className="bg-orange-400 row-span-9">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
