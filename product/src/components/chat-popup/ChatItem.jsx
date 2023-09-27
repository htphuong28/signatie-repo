import React from "react";
import { useAccount } from "../../store/useAccount";

const ChatItem = ({ content, userName, createdAt, id }) => {
    const date = new Date(createdAt?.seconds*1000).toLocaleTimeString()
    const {userInfo } = useAccount()


    const isMe = userInfo.uid === id

    



  return (
    <div>
      <div className={`chat ${isMe ? "chat-end" : "chat-start"}  `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={
                isMe ?
                userInfo.profileImageUrl : 'https://giadinh.mediacdn.vn/zoom/700_438/296230595582509056/2022/11/16/avatar1668553847552-16685538480401438048127.jpg'} />
          </div>
        </div>
        {!isMe && (
          <div className="chat-header">
            {userName}
            <time className="text-xs opacity-50 ml-2">{date}</time>
          </div>
        )}

        <div className="chat-bubble">{content}</div>
        {isMe && (
          <div className="chat-footer opacity-50 text-xs mt-1">Delivered at {date}</div>
        )}
      </div>
    </div>
  );
};

export default ChatItem;