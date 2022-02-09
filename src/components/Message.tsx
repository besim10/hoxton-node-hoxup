import { SingleMessage } from './Conversation'

type Props = {
  message: SingleMessage
  outgoing: boolean
}

function Message ({ message, outgoing }:Props) {
  return (
    <li className={outgoing ? 'outgoing' : 'incoming'}>
      <p>{message.messageText}</p>
    </li>
  )
}

export default Message
