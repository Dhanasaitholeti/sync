import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Chat = () => {
  const params = useParams();
  const msgs = useSelector((state: any) => state.chatMsgs.msgs);
  console.log(msgs);
  return (
    <>
      <main className="h-[100vh] grid grid-rows-14">
        <div className="bg-transparent row-span-13">
          <p>THis is a page for particular Chat with chat Id</p>
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
