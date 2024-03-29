import { useState } from "react";
import {Link} from 'react-router-dom';

function Create() {
  const [roomName, setRoomName] = useState("");
  const[nickname, setNickname] = useState("");
  const [data, setData] = useState({table: "", person: ""});

  const handleRoom = (e) =>{
    setRoomName(e.target.value)
  }

  const handleName = (e) =>{
    setNickname(e.target.value)
  }


  const createRoom = () =>{
   
    console.log(roomName, nickname) 
    setData({table: roomName, person: nickname})
    console.log(data)
  }

    return (
      <div className="room-create">
        <form >
          <input type="text" placeholder="Add a Room Name" value={roomName} onChange={handleRoom} />
          <input type="text" placeholder="Add a Nickname" value={nickname} onChange={handleName} />
          <Link to={{pathname:`/table/${roomName}`}} state = {{table: roomName, person: nickname}}>
            <input type="submit" value="Create Room" onClick={createRoom}/>
          </Link>
        </form>
      </div> 
    );

}


export default Create;