import { Button } from "@/components/ui/button";
import { emitMessage } from "@/socketManager";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";

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
    setMsg("");
  };

  const handleOnChange = (e: any) => {
    setMsg(e.target.value);
  };

  return (
    <div className="p-4 flex items-center">
      <input
        type="text"
        value={msg}
        placeholder="Type your message..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        onChange={(e) => handleOnChange(e)}
      />
      <Button
        onClick={handleSendMsg}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        <BsFillSendFill size={20} />
      </Button>
    </div>
  );
};

export default InputMsg;
