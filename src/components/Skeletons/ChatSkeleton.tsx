import { Skeleton } from "../ui/skeleton";

const ChatSkeleton = () => {
  return (
    <div className="flex items-center space-x-4 ">
      <Skeleton className="h-10 w-10 rounded-full bg-slate-700" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[60%] bg-slate-700" />
        <Skeleton className="h-4 w-[200px] bg-slate-700" />
      </div>
    </div>
  );
};

export default ChatSkeleton;
