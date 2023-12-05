import { Button, Card, CardBody, Textarea } from "@nextui-org/react"
import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";


const MessageInputContainer = () => {
    const [inputValue, setInputValue] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(e.target.value)
        setInputValue(true);
      };
  return (
    
        <div className="flex flex-row w-screen gap-2 items-center justify-center bg-trasparent">
        <Textarea
            onChange={()=>handleInputChange}
            className="  text-base border-none rounded-full h-10 w-10/12 overflow-hidden "
                placeholder="message"
            rows={1}
             onInput={(e) => {
            e.currentTarget.style.height = 'inherit';
             e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
         }}
/>
        <Button size="md" radius="full" isIconOnly  variant="flat">
            {inputValue ? <FaArrowUp/> : <FaHeadphones/>}
        </Button>

        </div>
    
  )
}

export default MessageInputContainer