import React, { useEffect, useState } from 'react';
import './MessUser.css';
import BodyLeft from 'container/MessUser/chunk/BodyLeft';
import BodyRight from 'container/MessUser/chunk/BodyRight';
import { checkRoomIdExits } from 'apis/messengerAPI';
import { DOMAIN_SOCKET } from 'apis';
const MessUser = () => {
  const username = localStorage.getItem('username');
  const user_id = localStorage.getItem('_id');

  const listUserFollowed = localStorage.getItem('listUserFollowed');

  const users = JSON.parse(listUserFollowed);
  const [messsages, setMessage] = useState([]);
  const [sendMessages, setSendMessage] = useState([]);
  const [chatWithUserId, setChatWithUserId] = useState('');
  const [roomId, setRoomId] = useState('');
  console.log('roomId: ', roomId);

  useEffect(() => {
    const socketConnection = new WebSocket(DOMAIN_SOCKET);

    socketConnection.addEventListener('open', () => {
      console.log('1. connected ws server:');

      if (chatWithUserId && roomId !== '') {
        const roomid = {
          sender: user_id,
          otherUser_id: chatWithUserId,
          roomId: roomId,
          getMessageFromModel: true,
        };
        socketConnection.send(JSON.stringify(roomid));
      }
      if (sendMessages.sendMessage === true && sendMessages.roomId.length > 0) {
        socketConnection.send(JSON.stringify(sendMessages));
        setSendMessage([]);
      }
    });

    socketConnection.addEventListener('message', (event) => {
      console.log('data from server', JSON.parse(event.data));
      setMessage(JSON.parse(event.data));
    });
    console.log(socketConnection.readyState);

    return () => {
      if (socketConnection.readyState === WebSocket.OPEN) {
        socketConnection.close();
      }
      console.log(socketConnection.readyState);
    };
  }, [chatWithUserId, roomId, sendMessages]);

  useEffect(() => {
    const fetchCheckRoomIdExits = async () => {
      if (chatWithUserId === '') {
        return;
      }
      const getRoomId = await checkRoomIdExits(user_id, chatWithUserId);
      // console.log('roomId from fetchCheckRoomIdExits: ', getRoomId);

      if (getRoomId.status === 200) {
        setRoomId(getRoomId.data.roomId);
      }
    };

    fetchCheckRoomIdExits();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatWithUserId, roomId]);

  // create room id
  return (
    <div className="Mess-user">
      <div className="Mess-body">
        {/* Left for the userlist */}
        <BodyLeft
          users={users}
          setChatWithUserId={setChatWithUserId}
          username={username}
        />

        {/* right for the chat */}

        <BodyRight
          user_id={user_id}
          otherUser_id={chatWithUserId}
          roomId={roomId}
          messsages={messsages}
          setSendMessage={setSendMessage}
        />
      </div>
    </div>
  );
};

export default MessUser;
