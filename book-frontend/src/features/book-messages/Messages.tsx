import { useEffect } from 'react';
import { fetchMessagesThunk } from './messagesThunk.ts';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectFetchingMessages, selectMessagesItem } from './messagesSlice.ts';
import MessageItem from './components/MessageItem.tsx';

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessagesItem);
  const isFetching = useAppSelector(selectFetchingMessages);

  useEffect(() => {
    dispatch(fetchMessagesThunk());
  }, [dispatch]);

  return (
    <div className="container">
      {isFetching ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages</p>
      ) : (
        [...messages].reverse().map((message) => (
          <MessageItem key={message.id} message={message.message} author={message.author} image={message.image}/>
        ))
      )}
    </div>
  );
};

export default Messages;