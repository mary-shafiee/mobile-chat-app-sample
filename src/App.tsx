import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import MessageInputContainer from './components/MessageInputContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Card className='flex flex-col h-screen' >
      <CardHeader className='h-12'>
        <Header/>
      </CardHeader>
      <CardBody className=' bg-stone-950 grow'>
        hiiiiiiiiiiiiiiiiii
      </CardBody>
      <CardFooter className='h-12   overflow-hidden  absolute before:rounded-xl rounded-large bottom-3 w-[calc(100%_-_8px)] shadow-md  ' >
          <MessageInputContainer/>
      </CardFooter>
    </Card>
  )
}

export default App
