import Messages from '../../features/book-messages/Messages.tsx';
import NewMessage from '../../features/book-messages/containers/NewMessage.tsx';

const MainPage = () => {
  return (
    <div>
      <NewMessage/>
      <Messages/>
    </div>
  );
};

export default MainPage;