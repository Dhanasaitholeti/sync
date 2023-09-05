import SideBar from "../SideBar";
import TopBar from "../TopBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div>
        <div>
          <TopBar />
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
