'use client'

import {Button} from "@/components/ui/button"

import {ChatList, Message} from "@/components/chat/chat-history"

import {CornerDownLeft, Mic, Paperclip,} from "lucide-react"

import {Badge} from "@/components/ui/badge"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import {FormEvent, useEffect, useState} from "react";

import useWebSocket from 'react-use-websocket';

const socketUrl = "ws://127.0.0.1:8000/chat"

interface ServerResponse {
  message: string
}

export default function IndexPage() {

  const [messageState, setMessage] = useState<Message[]>([]);
  const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket<ServerResponse>(socketUrl);

  useEffect(() => {
    if (lastJsonMessage !== null) {
      let msg = {from: "BOT", message: lastJsonMessage.message}
      setMessage((prev) => prev.concat(msg));
    }
  }, [lastJsonMessage]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log("send triggered")
    event.preventDefault()

    let formData = new FormData(event.currentTarget)
    let user_msg: string = formData.get("message")!.toString() ?? ""

    if (user_msg === "") {
      return
    }

    let new_message = {from: "User", message: user_msg}
    setMessage([...messageState, new_message]);
    sendJsonMessage({message: user_msg})
  }

  return (
    <div className="container grid w-full py-3">
      <div className="relative flex flex-grow min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <Badge variant="outline" className="absolute right-3 top-3">
          Output
        </Badge>
        <div className="flex-1 overflow-y-auto">
          <ChatList messages={messageState}/>
        </div>
        <form
          className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          x-chunk="dashboard-03-chunk-1"
          onSubmit={onSubmit}
        >
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="size-4"/>
                    <span className="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Attach File</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Mic className="size-4"/>
                    <span className="sr-only">Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Use Microphone</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              Send Message
              <CornerDownLeft className="size-3.5"/>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
