import { indvidualMessageType } from "@/configs/Types";
import { Card } from "../ui/card";
import { useSelector } from "react-redux";

interface chatMessageType {
  chats: indvidualMessageType[];
}

const RenderChats: React.FC<chatMessageType> = ({ chats }) => {
  const currentuser = useSelector((state: any) => state.user.user);
  // console.log(currentuser);

  return (
    <>
      <div className="relative">
        {chats.map((msg) => (
          <Card
            className={`${
              msg.senderId == currentuser.userId
                ? "bg-red-500 left-0"
                : "bg-blue-500 right-0"
            } max-w-lg`}
          >
            <p>{msg.content}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default RenderChats;
