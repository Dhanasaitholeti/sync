import SideBar from "../SideBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-[100vh] grid grid-cols-6 gap-2">
        <SideBar />
        <div className=" col-span-5 grid grid-rows-10  bg-neutral-200">
          <main className=" row-span-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
