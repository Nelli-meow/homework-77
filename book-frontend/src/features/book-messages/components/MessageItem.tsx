import * as React from 'react';
import { apiURL } from '../../../globalConstants.ts';

interface Props {
  message: string;
  author: string;
  image?: string;
}

const MessageItem: React.FC<Props> = ({author, message, image}) => {

  console.log(image);

  return (
    <div className="border border-2 rounded-md shadow-sm p-5 mb-5 d-flex align-items-center justify-content-between">
      <h3>{author}</h3>
      <p>{message}</p>
      {image && <img src={`${apiURL}/${image}`} alt="image" className="img-thumbnail w-25"  />}
    </div>
  );
};

export default MessageItem;