import { ChangeEvent, FormEvent, useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import MessageInputContainer from './components/MessageInputContainer'

function App() {
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Message to send:", message);
    // Add logic to handle the message (e.g., sending to a server)
    setMessage(''); // Optionally reset the message after sending
  };

  return (
    <Card className='flex flex-col h-screen' >
      <CardHeader className='h-12'>
        <Header/>
      </CardHeader>
      <CardBody className=' bg-stone-950 grow'>
        hiiiiiiiiiiiiiiiiii
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
