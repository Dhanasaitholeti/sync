import InputMsg from "@/components/InputMsg";
import RenderChats from "@/components/RenderChats";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { chatId } = useParams();
  const allmesges = useSelector((state: any) => state.chatMsgs.msgs);
  console.log(allmesges);
  const msgs =
    chatId &&
    useSelector((state: any) =>
      state.chatMsgs.msgs
        ? state.chatMsgs.msgs[chatId]
          ? state.chatMsgs.msgs[chatId]
          : null
        : undefined
    );

  const renderChats = () => {
    if (msgs === null) return <h1>No chats</h1>;
    else if (msgs === undefined) return <h1>loading</h1>;
    else
      return (
        <>
          <main className="h-[100vh] grid grid-rows-14 gap-2">
            <div className=" shadow-lg sidebar-bg-color text-lg lg:text-2xl align-middle font-bold text-center py-4">
              Synk - connect with your friends
            </div>
            <div className=" bg-transparent row-span-12 overflow-y-scroll">
              <RenderChats chats={msgs} />
            </div>
            <InputMsg />
          </main>
        </>
      );
  };

  return <>{renderChats()}</>;
};

export default Chat;
