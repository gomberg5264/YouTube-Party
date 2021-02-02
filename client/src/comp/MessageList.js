
import React from 'react'; 
import CommentDetail from './CommentDetail';

const MessageList = (props) => {
  const images = props.msglist.map(msg => {
    return <CommentDetail content = {msg.Content} name ={msg.Name} time={msg.Time} />;
  });

  return <div className="ui comments"> {images}</div>;
};

export default MessageList;