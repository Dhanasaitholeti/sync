import RenderChats from "@/components/RenderChats";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { chatId } = useParams();

  const msgs =
    chatId && useSelector((state: any) => state.chatMsgs.msgs[chatId]);

  console.log(msgs);
  return (
    <>
      <main className="h-[100vh] grid grid-rows-14">
        <div className="bg-transparent row-span-13">
          <RenderChats chats={msgs} />
        </div>
        <div className="bg-transparent flex items-center justify-evenly">
          <Textarea
            className="max-w-6xl resize-none h-[15%]"
            placeholder="Enter your message"
          />
          <Button>Send</Button>
        </div>
      </main>
    </>
  );
};

export default Chat;
