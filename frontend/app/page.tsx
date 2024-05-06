import {Button} from "@/components/ui/button"

import {CornerDownLeft, Mic, Paperclip,} from "lucide-react"

import {Badge} from "@/components/ui/badge"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"


export default function IndexPage() {
  return (
    // <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    //   <div className="flex max-w-[980px] flex-col items-start gap-2">
    //     <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
    //       Beautifully designed components <br className="hidden sm:inline"/>
    //       built with Radix UI and Tailwind CSS.
    //     </h1>
    //     <p className="max-w-[700px] text-lg text-muted-foreground">
    //       Accessible and customizable components that you can copy and paste
    //       into your apps. Free. Open Source. And Next.js 13 Ready.
    //     </p>
    //   </div>
    //   <div className="flex gap-4">
    //     <Link
    //       href={siteConfig.links.docs}
    //       target="_blank"
    //       rel="noreferrer"
    //       className={buttonVariants()}
    //     >
    //       Documentation
    //     </Link>
    //     <Link
    //       target="_blank"
    //       rel="noreferrer"
    //       href={siteConfig.links.github}
    //       className={buttonVariants({variant: "outline"})}
    //     >
    //       GitHub
    //     </Link>
    //   </div>
    // </section>
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <Badge variant="outline" className="absolute right-3 top-3">
        Output
      </Badge>
      <div className="flex-1"/>
      <form
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        x-chunk="dashboard-03-chunk-1"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
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
  )
}
