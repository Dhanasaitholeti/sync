import { indvidualMessageType } from "@/configs/Types";
import { Card } from "../ui/card";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

interface chatMessageType {
  chats: indvidualMessageType[];
}

const RenderChats: React.FC<chatMessageType> = ({ chats }) => {
  const currentuser = useSelector((state: any) => state.user.user);
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // call the function when the component mounts or updates
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <>
      <div className="flex flex-col space-y-2 p-4">
        {chats.map((msg) => (
          <Card
            key={msg.id}
            className={`${
              msg.senderId == currentuser.userId
                ? "self-end bg-blue-500 text-white rounded-br-none p-2 flex items-center"
                : "self-start sidebar-bg-color rounded-tl-none p-2 flex items-center"
            }`}
          >
            <p>{msg.content}</p>
          </Card>
        ))}
        <div ref={endRef} />
      </div>
    </>
  );
};

export default RenderChats;
