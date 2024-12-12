import * as React from 'react';
import { useCallback, useState } from 'react';
import { ChatMessageMutation } from '../../types';

interface Props {
  onSubmit: (message: ChatMessageMutation) => void;
}

const initialState = {
  author: '',
  message: '',
};

const Form: React.FC = () => {
  const [oneMessage, setOneMessage] = useState(initialState);

  const submitMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!oneMessage.message) {
      console.log('Both fields are required.');
      return;
    }

    // onSubmit(oneMessage);
    setOneMessage(initialState);
  };

  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOneMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);


  return (
    <div className="container mt-5">
      <h3 className="text-center">Guest book</h3>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="author"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="message*"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="image"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
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