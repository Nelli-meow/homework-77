import * as React from 'react';
import { useCallback, useState } from 'react';
import { IMessageMutation } from '../../types';
import FileInput from '../FileInput/FileInput.tsx';

interface Props {
  onSubmit: (message: IMessageMutation) => void;
}

const initialState = {
  author: '',
  message: '',
  image: null,
};

const Form: React.FC<Props> = ({onSubmit}) => {
  const [oneMessage, setOneMessage] = useState<IMessageMutation>(initialState);

  const submitMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!oneMessage.message) {
      alert('Please enter a message');
      return;
    }

    const messageToSubmit = {
      ...oneMessage,
      author: oneMessage.author || 'Anonymous',
    };

    onSubmit(messageToSubmit);
    setOneMessage(initialState);
  };

  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setOneMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files) {
      setOneMessage((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Guest book</h3>
      <form onSubmit={submitMessage}>
        <div className="input-group mb-3">
          <input
            value={oneMessage.author}
            name="author"
            onChange={inputChangeHandler}
            type="text"
            className="form-control"
            placeholder="author"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
          <textarea
            value={oneMessage.message}
            name="message"
            onChange={inputChangeHandler}
            type="text"
            className="form-control"
            placeholder="message*"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
         <FileInput name="image" label="Image" onGetFile={getFile}/>
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-outline-info">Submit</button>
        </div>
      </form>
      <hr/>
    </div>
  );
};

export default Form;