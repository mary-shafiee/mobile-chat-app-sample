import { ChangeEvent, FormEvent, useState } from 'react'
import { CiPill } from "react-icons/ci";

import './App.css'
import Header from './components/Header'
import { Avatar, Card, CardBody, CardFooter, CardHeader, User } from '@nextui-org/react'
import MessageInputContainer from './components/MessageInputContainer'


interface MessagesType {
  message : string ,
  sender ?: string,
  setTime?: string,
  id ?: number
} 

function App() {
  const [message, setMessage] = useState<string>();
  const [typing , setTyping] = useState(false)
  const [messages, setMessages] = useState<MessagesType[]>([
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    }
  ])


//  const processMessagesToChatGPT = async(chatMessages :MessagesType[]) => {
//   chatMessages.map((messageObject : MessagesType)=> {
//    let role :string = "" ;
//    if(messageObject.sender === "ChatGPT"){
//      role = "assistant";
//    }else {
//      role = "user"
//    }
//    return { role : role , content : messageObject.message}
//  });}

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Message to send:", message);
    if(!message) return null
    // Add logic to handle the message (e.g., sending to a server)
    const newMessage : MessagesType ={
      message : message ,
      sender : 'user',
      
     }
     const newMessages = [...messages , newMessage] // all old messages + the new one
     setMessages(newMessages)

     //set a typing indicator 
     setTyping(true)
     setInterval(()=>setTyping(false) , 3000)
    setMessage(''); // Optionally reset the message after sending
    // processMessagesToChatGPT(newMessages)

  };

  return (
    <Card className='flex flex-col h-screen' >
      <CardHeader className='h-12'>
        <Header/>
      </CardHeader>
      <CardBody className=' bg-stone-950 grow w-screen flex flex-col p-1'>
      {messages.map((message , index) => (
        message.sender === 'ChatGPT' ? 
          <div className='flex gap-2 items-center pl-2' key={index}>
             <Avatar  className="w-6 h-6 text-tiny" fallback={<CiPill size={'20px'}/>} />
             <div key={index} className="p-1 text-gray-200 my-2 rounded-lg bg-stone-950">
               {message.message}
             </div>
          </div>
          
          : 
          <div className='flex gap-2 items-center pl-2' key={index}>
          <Avatar showFallback src='https://images.unsplash.com/broken'  className="w-6 h-6 text-tiny"  />
          <div  className="p-1 text-gray-200 my-2 rounded-lg bg-stone-950">
            {message.message}
          </div>
       </div>
        
        ))}
      </CardBody>
      <CardFooter className='h-12   overflow-hidden  absolute before:rounded-xl rounded-large bottom-3 w-[calc(100%_-_8px)] shadow-md  ' >
          <MessageInputContainer message={message}
        onMessageChange={handleInputChange}
        onMessageSubmit={handleMessageSubmit} />
      </CardFooter>
    </Card>
  )
}

export default App
