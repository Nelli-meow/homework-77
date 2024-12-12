import Form from '../../../components/Form/Form.tsx';
import { addMessagesThunk } from '../messagesThunk.ts';
import { IMessageMutation} from '../../../types';
import { useAppDispatch } from '../../../app/hooks.ts';


const NewMessage = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (message: IMessageMutation) => {
    await dispatch(addMessagesThunk(message));
  };

  return (
    <>
      <Form onSubmit={onSubmit}/>
    </>
  );
};

export default NewMessage;