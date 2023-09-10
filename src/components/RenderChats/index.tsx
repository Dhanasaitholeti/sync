import { indvidualMessageType } from "@/configs/Types";

interface chatMessageType {
  chats: indvidualMessageType[];
}

const RenderChats: React.FC<chatMessageType> = ({ chats }) => {
  console.log(chats);
  return (
    <>
      <div>
        <main>hello world</main>
      </div>
    </>
  );
};

export default RenderChats;
