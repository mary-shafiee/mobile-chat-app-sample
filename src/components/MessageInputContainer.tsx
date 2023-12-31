import { Button,  Textarea } from "@nextui-org/react"
import { ChangeEvent, FormEvent } from "react";
import { FaArrowUp } from "react-icons/fa6";

interface MessageInputProps {
    message: string | undefined,
    onMessageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onMessageSubmit: (e: FormEvent) => void,
    istyping : boolean
  
  }


const MessageInputContainer = ({ message, onMessageChange, onMessageSubmit  ,istyping}  : MessageInputProps) => {
  
  
        



  return (
    
        <form className="flex flex-row w-screen gap-2 items-center justify-center bg-trasparent" onSubmit={onMessageSubmit}>

        <Textarea
            readOnly={istyping}
            value={message}
            onChange={onMessageChange}
            className="  text-base border-none rounded-full h-10 w-10/12 overflow-hidden "
                placeholder={istyping ? 'waiting' : 'message'}
            rows={1}
      
/>
        <Button size="md" radius="full" isIconOnly  variant="flat" type="submit">
            {/* {  inputValue ? <FaArrowUp /> : <FaHeadphones />}     */}
            <FaArrowUp/>
        </Button>

        </form>
    
  )
}

export default MessageInputContainer