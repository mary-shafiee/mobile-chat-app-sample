import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'
import avatar from './assets/avatar.png'
import './App.css'
import Header from './components/Header'
import { Avatar, Card, CardBody, CardFooter, CardHeader, ScrollShadow } from '@nextui-org/react'
import MessageInputContainer from './components/MessageInputContainer'
import TypingIndicator from './components/TypingIndicator';


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
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You ",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You dcfberugnfjkdvn reugnvdjkvn reugndjkfvn nmfvhwlefijw;qfkcmledvhngjfkdcvn dfjghirdjkvn jcxdvbug",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You dcfberugnfjkdvn reugnvdjkvn reugndjkfvn nmfvhwlefijw;qfkcmledvhngjfkdcvn dfjghirdjkvn jcxdvbug",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
    {
      message : "Hi I'm Here To Help You dcfberugnfjkdvn reugnvdjkvn reugndjkfvn nmfvhwlefijw;qfkcmledvhngjfkdcvn dfjghirdjkvn jcxdvbug",
      sender : "ChatGPT",
      setTime : 'just now',
      id:1
      
    },
  ])

  const lastMessageRef = useRef<HTMLDivElement | null>(null);
 

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  
 
  

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
    if(!message) return ;
    // Add logic to handle the message (e.g., sending to a server)
    const newMessage : MessagesType ={
      message : message ,
      sender : 'user',
      
    }
    const newMessages = [...messages , newMessage] // all old messages + the new one
    setMessages(newMessages)
    setMessage(''); // Optionally reset the message after sending

     //set a typing indicator 
     setTyping(true)

     // Simulate a delay for receiving a response
  setTimeout(() => {
    setTyping(false); // Stop typing indicator

    // Add a fake response
    const fakeResponse: MessagesType = {
      message: "This is a fake response",
      sender: "ChatGPT",
      setTime: 'just now',
      id: messages.length + 2 // Adjust the ID appropriately
    };
    setMessages(prevMessages => [...prevMessages, fakeResponse]);
  }, 5000); // Adjust the delay as needed
    // processMessagesToChatGPT(newMessages)

  };

  return (
    <Card className='flex flex-col h-screen' >
      <CardHeader className='h-12'>
        <Header/>
      </CardHeader>
      <ScrollShadow hideScrollBar >
      <CardBody className=' bg-stone-950 grow w-screen flex flex-col p-1'>
      
      {messages.map((message , index) => (
        message.sender === 'ChatGPT' ? 
          <div className='flex gap-2 items-center pl-2' key={index} ref={index === messages.length - 1 ? lastMessageRef : null}>
             <Avatar  className="w-6 h-6 text-tiny"  src={logo} />
             <article key={index} className=" message-enter p-1 text-gray-200 my-2 rounded-lg bg-stone-950 max-w-[300px]">
               {message.message}
             </article>
          </div>
          
          : 
          <div className='flex gap-2 items-center pl-2' key={index}  ref={index === messages.length - 1 ? lastMessageRef : null}>
          <Avatar showFallback src={avatar}  className="w-6 h-6 text-tiny"  />
          <article  className="message-enter p-1 text-gray-200 my-2 rounded-lg bg-stone-950 max-w-[300px]">
            {message.message}
          </article>
       </div>
        
        ))}
          
      </CardBody>
      </ScrollShadow>
        {typing && (
          <div className='flex gap-2 items-center pl-2'>
             <TypingIndicator />
          </div>
          )}
          
      <CardFooter className='h-20   bg-stone-950  w-full ' >
          <MessageInputContainer message={message}
        onMessageChange={handleInputChange}
        onMessageSubmit={handleMessageSubmit} istyping={typing} />
      </CardFooter>
    </Card>
  )
}

export default App
