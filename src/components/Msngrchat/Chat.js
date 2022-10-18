import React from 'react'

import { MessengerChat } from "react-messenger-chat-plugin"


const Chat = () => {


  return (
    <div>
      <MessengerChat pageId='101010511967331' 
       language="sv_SE"
       themeColor={"#000000"}
       bottomSpacing={300}
       loggedInGreeting="loggedInGreeting"
       loggedOutGreeting="loggedOutGreeting"
       greetingDialogDisplay={"show"}
       debugMode={true}
      />
    </div>
  )
}

export default Chat