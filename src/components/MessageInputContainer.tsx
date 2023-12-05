import { Button,  Textarea } from "@nextui-org/react"
import { ChangeEvent, FormEvent } from "react";
import { FaArrowUp } from "react-icons/fa6";

interface MessageInputProps {
    message: string,
    onMessageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onMessageSubmit: (e: FormEvent) => void,
  
  }
// interface messageType {
//     message : string ,
//     role : string ,
//     id : number
// }

const MessageInputContainer = ({ message, onMessageChange, onMessageSubmit  }  : MessageInputProps) => {
  
    // const [inputValue, setInputValue] = useState<string>(message);
    
    // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      
    //     setInputValue(e.target.value);
        

    //   };

 

    //   const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();
    //     sendMessage(inputValue);
    //     setInputValue('');
    //   };

  return (
    
        <form className="flex flex-row w-screen gap-2 items-center justify-center bg-trasparent" onSubmit={onMessageSubmit}>

        <Textarea
            value={message}
            onChange={onMessageChange}
            className="  text-base border-none rounded-full h-10 w-10/12 overflow-hidden "
                placeholder="message"
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