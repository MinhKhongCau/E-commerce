import { useState } from "react";
import { FaCaretSquareDown } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import axios from 'axios';

const ChatBox = ({ shopAssistants }) => {
    const [assistant, setAssistant] = useState({
        name: '',
        messages: []
    })

    const [openChatBox, setOpenChatBox] = useState(false)
    const [userMessage, setUserMessage] = useState('')

    const handleSend = () => {
        if (userMessage.trim() === '') return;

        // Gửi tin nhắn của người dùng
        setAssistant(prev => ({
            ...prev,
            messages: [...prev.messages, { sender: 'user', text: userMessage }]
        }));

        setUserMessage('');

        // axios({
        //     url: 'https://jsonplaceholder.typicode.com/users',
        //     method: 'GET'
        // })
        // .then((res) => {
        //     console.log(res.data)
        // })
        // .catch(() => {
        //     console.error('Oops, there is an error')
        // })

        axios({
            url: `/api/chatbot?message=${userMessage}`,
            method: 'GET'
        })
            .then((res) => {
                const botReply = res.data.text;
                setAssistant(prev => ({
                    ...prev,
                    messages: [...prev.messages, { sender: 'assistant', text: botReply }]
                }));
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }

    return <>
        <button
            type={'button'}
            className={'fixed bottom-0 right-0 bg-orange-500 w-32 h-12 rounded-tl-lg flex justify-center items-center hover:bg-orange-400'}
            onClick={() => setOpenChatBox(true)}
        ><IoMdChatboxes />Chat</button>
        <div className={`fixed w-3/5 h-3/5 bg-white bottom-0 right-0 rounded ${openChatBox ? 'visible' : 'invisible'}`}>
            <div className={'flex justify-between border-b-2 border-orange-500 shadow'}>
                <h3 className={'text-orange-500 text-xl px-4 py-2'}>
                    Chat
                </h3>
                <button
                    className={'text-orange-500 p-4 hover:border-1'}
                    onClick={() => setOpenChatBox(false)}
                ><FaCaretSquareDown /></button>
            </div>
            <div className={'flex relative h-full'}>
                <div className={'w-2/5 h-full shadow border-r-2 overflow-y-auto'}>
                    {shopAssistants.map((shopAssistant, index) => (
                        <div key={index} className="my-2 py-2 flex hover:bg-gray-300"
                            onClick={() => setAssistant(shopAssistant)}>
                            <div>
                                <div className={'rounded-full w-16 h-16 m-2 bg-orange-500 shadow flex justify-center items-center overflow-hidden'}>
                                    <img
                                        src={shopAssistant.photo}
                                        alt={shopAssistant.name}
                                        className={'object-cover'}
                                    />
                                </div>
                            </div>
                            <div className={'flex-1 overflow-hidden'}>
                                <p className={'text-gray-600 w-full font-bold truncate'}>{shopAssistant.name}</p>
                                <p className={'text-gray-500 w-full truncate'}>{
                                    shopAssistant.messages.length > 0
                                        ? shopAssistant.messages[shopAssistant.messages.length - 1].text
                                        : ''
                                }</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'flex-1 flex flex-col justify-between mb-16'}>
                    <div className={'flex-1 overflow-y-auto p-4 space-y-2'}>
                        {assistant.messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`p-2 my-1 rounded-xl max-w-[70%] text-sm text-black ${msg.sender === 'user' ? 'bg-orange-100 text-right' : 'bg-gray-100 text-left'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={'border-t flex p-2 shadow'}>
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            placeholder={'Type a message...'}
                            className={'flex-1 text-black border rounded px-4 py-2 mr-2 focus:outline-orange-400'}
                        />
                        <button
                            onClick={handleSend}
                            className={'bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded'}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChatBox;