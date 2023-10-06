import { indvidualMessageType } from "@/configs/Types";
import { Card, CardFooter } from "../ui/card";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { BiSolidConversation } from "react-icons/bi";

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
        {chats.length > 0 ? (
          chats.map((msg) => (
            <Card
              key={msg.id}
              className={`${
                msg.senderId == currentuser.userId
                  ? "self-end bg-blue-500 text-white rounded-br-none p-2 flex items-center"
                  : "self-start sidebar-bg-color rounded-tl-none p-2 flex items-center"
              }`}
            >
              <div>
                <p className="font-semibold">{msg.content}</p>
                <div className="flex justify-end">
                  <p className="text-sm  opacity-85">
                    {msg.sentTime.slice(12, 16)}
                  </p>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="container relative flex flex-col gap-5 items-center justify-center top-32 h-[50vh] max-w-xl w-full bg-white rounded-xl ">
            <div className="animate-bounce">
              <BiSolidConversation size={72} color={"blue"} />
            </div>
            <p className="text-3xl font-semibold text-blue-500">
              Try to Start the conversation
            </p>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </>
  );
};

export default RenderChats;
