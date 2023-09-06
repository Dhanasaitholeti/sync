import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const SideBar = () => {
  return (
    <>
      <aside className="bg-neutral-200">
        <div>
          <Input type="Email" />
        </div>
        <Separator />
        <div>
          <p>Your Chats:</p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
