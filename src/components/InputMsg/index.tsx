import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { emitMessage } from "@/socketManager";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const InputMsg = () => {
  const currentuser = useSelector((state: any) => state.user.user);
  const location = useLocation();
  const chatIds = location.pathname.split("/");
  const [msg, setMsg] = useState("");

  const handleSendMsg = () => {
    emitMessage({
      content: msg,
      senderId: currentuser.userId,
      chatId: chatIds[chatIds.length - 1],
    });
  };

  const handleOnChange = (e: any) => {
    setMsg(e.target.value);
  };

  return (
    <div className="bg-transparent flex items-center justify-evenly">
      <Textarea
        className="max-w-6xl resize-none h-[15%]"
        placeholder="Enter your message"
        onChange={(e) => handleOnChange(e)}
      />
      <Button onClick={handleSendMsg}>Send</Button>
    </div>
  );
};

export default InputMsg;
