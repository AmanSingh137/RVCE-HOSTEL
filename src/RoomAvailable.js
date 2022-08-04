import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RoomAvailable.css';

const RoomAvailabe = () => {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");
    const [usn, setUSN] = useState("");
    const [phn, setPhn] = useState("");
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/rooms');
            console.log(response.data);
            setRooms(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {rooms.length > 0 ?
                <>
                    <h1 style={{ fontWeight: "300", marginLeft: "50px", marginTop: "30px" }}>A Wing</h1>
                    <hr style={{ width: "96%", marginLeft: "20px" }} />
                    <div style={{ display: "flex", displayDirection: "row", flexWrap: "wrap", marginLeft: "30px" }}>
                        {
                            rooms.map((item, id) => {
                                {/* here */}
                                if (item.wing === "A")
                                    return <div style={{
                                        height: "100px", width: "200px",
                                        backgroundColor: item.studentNo === 0 ? "#4ff04f" : item.studentNo === 1 ? "#4f97f0" : "#f04f52",
                                        marginTop: "10px", marginLeft: "10px", borderRadius: "10px", textAlign: "center", cursor: "pointer"
                                    }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (item.studentNo === 2) alert("Please select a different room as this one is not vacant!");
                                            else
                                                setRoom(item.wing + "-" + item.roomNo);
                                        }}
                                    >
                                        <h3 style={{ marginTop: "33px", fontWeight: "300" }}>{item.wing}-{item.roomNo}</h3>
                                    </div>
                            })
                        }
                    </div>
                    <h1 style={{ fontWeight: "300", marginLeft: "50px", marginTop: "30px" }}>B Wing</h1>
                    <hr style={{ width: "96%", marginLeft: "20px" }} />
                    <div style={{ display: "flex", displayDirection: "row", flexWrap: "wrap", marginLeft: "30px" }}>
                        {
                            rooms.map((item, id) => {
                                {/* here */}
                                if (item.wing === "B")
                                    return <div className='room' style={{
                                        height: "100px", width: "200px",
                                        backgroundColor: item.studentNo === 0 ? "#4ff04f" : item.studentNo === 1 ? "#4f97f0" : "#f04f52",
                                        marginTop: "10px", marginLeft: "10px", borderRadius: "10px", textAlign: "center", cursor: "pointer"
                                    }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (item.studentNo === 2) alert("Please select a different room as this one is not vacant!");
                                            else
                                                setRoom(item.wing + "-" + item.roomNo);
                                        }}
                                    >
                                        <h3 style={{ marginTop: "33px", fontWeight: "300" }}>{item.wing}-{item.roomNo}</h3>
                                    </div>
                            })
                        }
                    </div>
                    <h1 style={{ fontWeight: "300", marginLeft: "50px", marginTop: "30px" }}>C Wing</h1> 
                    
                    <hr style={{ width: "96%", marginLeft: "20px" }} />
                    <div style={{ display: "flex", displayDirection: "row", flexWrap: "wrap", marginLeft: "30px", marginBottom: "50px" }}>
                        {
                            rooms.map((item, id) => {
                                {/* here */}
                                if (item.wing === "C")
                                    return <div style={{
                                        height: "100px", width: "200px",
                                        backgroundColor: item.studentNo === 0 ? "#4ff04f" : item.studentNo === 1 ? "#4f97f0" : "#f04f52",
                                        marginTop: "10px", marginLeft: "10px", borderRadius: "10px", textAlign: "center", cursor: "pointer"
                                    }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (item.studentNo === 2) alert("Please select a different room as this one is not vacant!");
                                            else
                                                setRoom(item.wing + "-" + item.roomNo);
                                        }}
                                    >
                                        <h3 style={{ marginTop: "33px", fontWeight: "300" }}>{item.wing}-{item.roomNo}</h3>
                                    </div>
                            })
                        }
                    </div>
                    {room.length > 0 ? <form action="submit">
                        <input type="text" placeholder='Room Number' value={room} onChange={(e) => {
                            setRoom(e.target.value);
                        }} />
                        <input type="text" placeholder='Name' value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <input type="text" value={usn} placeholder='USN' onChange={(e) => {
                            setUSN(e.target.value);
                        }} />
                        <input type="text" value={phn} placeholder="Phone Number" onChange={(e) => {
                            setPhn(e.target.value);
                        }} />
                        <button onClick={(e) => {
                            e.preventDefault();
                            axios.post("http://localhost:5000/applications", {
                                roomNo: room,
                                Name: name,
                                USN: usn,
                                Phone: phn
                            })
                        }}>Submit</button>
                    </form> : ""}
                </> : <h1>Loading...</h1>}
        </>
    )
}

export default RoomAvailabe;