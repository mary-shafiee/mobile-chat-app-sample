const TypingIndicator = () => {
    return (
        <div className="typing-indicator-container">
        <div className="flex items-center space-x-2">
      <div className="h-2 w-2 bg-sky-900 rounded-full animate-bounce"></div>
      <div className="h-2 w-2 bg-sky-800  rounded-full animate-bounce200"></div>
      <div className="h-2 w-2 bg-sky-900 rounded-full animate-bounce400"></div>
    </div>
    </div>
    )
    
    };


  export default TypingIndicator;