import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import usePopup from '../../store/usePopUp';
import { BsFillChatFill } from "react-icons/bs"
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import { useAccount } from '../../store/useAccount';
import ChatItem from './ChatItem';
;

const ChatPopup = () => {

    const { show, setShow } = usePopup()
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const srollToLastMessage = useRef();
    const { userInfo } = useAccount()

    const [listChat, setListChat] = useState([])

    const chatRef = collection(db, 'chats')


    useEffect(() => {
        setIsLoading(true)
        const continueGetChat = onSnapshot(
            query(chatRef, orderBy("createdAt")),
            (allChat) => {
                const collectionData = allChat.docs.map((doc) => ({
                    ...doc.data(),
                    doc_id: doc.id,
                }));
                setListChat(collectionData);
                setIsLoading(false)
            }
        );

        return continueGetChat;
        
    }, [show]);



    if (!show) return;





    const handleSend = async (e) => {
        e.preventDefault()

        if (content.trim() === '') {
            return
        }
        try {

            const payload = {
                content: content,
                createdAt: serverTimestamp(),
                userName: userInfo.displayName !==null ? userInfo.displayName : userInfo.email,
                id: userInfo.uid
            }

            const res = await addDoc(chatRef, payload)
            if (res) {
                setContent('')
            }
        } catch (e) {
            alert(e.message)
        }

    }

    console.log(userInfo.displayName)


    return (

        <div className='flex flex-col fixed bottom-4 right-4 w-[300px] h-[350px] bg-slate-400 rounded-[10px] pl-2 py-2'>


            <div
                onClick={() => setShow(false)}
                className="h-4 w-full flex flex-1 justify-between items-center pr-2 py-2"
            >
                <div className='text-md font-medium'>
                    Chat with admin
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div className="border-t border-slate-400 mt-3 h-5/6 w-full overflow-y-auto rounded-md pb-2">
                <div className="h-auto min-h-[360px] bg-base w-full">
                    {isLoading && (
                        <div className="flex flex-1 justify-center items-center text-lg mt-4">
                            Loading ...
                        </div>
                    )}
                    {listChat?.map((item, index) => {
                        return <ChatItem {...item} key={index} />;
                    })}
                    <p ref={srollToLastMessage} />
                </div>
            </div>

            <div className='flex flex-row items-center justify-between h-[40px] w-full flex-1 rounded-b-[16px] px-1 gap-x-1'>
                <input
                    type="text"
                    placeholder="Enter your content"
                    className="border border-slate-200 rounded-lg outline-none  bg-transparent bg-white flex-1 px-2 py-1"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className='p-2 flex justify-center items-center bg-red-500 rounded-md text-white'>
                    <AiOutlineSend />
                </button>
            </div>

        </div>

    )
}

export default ChatPopup