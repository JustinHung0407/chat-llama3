'use client';

import {cn} from "@/lib/utils";
import {Avatar, AvatarImage} from "@/components/ui/avatar"
import React, {useRef} from "react";

export interface Message {
  id: number;
  message: string;
  from: string;
}

interface ChatListProps {
  messages?: Message[],
}

export function ChatList({messages}: ChatListProps) {

  // const messagesContainerRef = useRef<HTMLDivElement>(null);
  // React.useEffect(() => {
  //   if (messagesContainerRef.current) {
  //     messagesContainerRef.current.scrollTop =
  //       messagesContainerRef.current.scrollHeight;
  //   }
  // }, [messages]);

  return (
    <>
      {messages?.map((message, index) => (
        <div
          className={cn(
            "flex flex-col gap-2 p-4 whitespace-pre-wrap",
            message.from !== "BOT" ? "items-end" : "items-start"
          )}
        >
          <div className="flex gap-3 items-center">
            {message.from === "BOT" && (
              <Avatar className="flex justify-center items-center">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={message.from}
                  width={6}
                  height={6}
                />
              </Avatar>
            )}

            <span className=" bg-accent p-3 rounded-md max-w-xs">
                  {message.message}
            </span>
            {message.from !== "BOT" && (
              <Avatar className="flex justify-center items-center">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={message.from}
                  width={6}
                  height={6}
                />
              </Avatar>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
