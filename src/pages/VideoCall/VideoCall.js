import React, { useState } from 'react'
import AgoraUIKit from "agora-react-uikit"
import useRole from '../../hooks/useRole';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const VideoCall = () => {
    const [user, loading] = useAuthState(auth);
    const role = useRole(user?.email);
    const [videoCall, setVideoCall] = useState(true);
    const [token, setToken] = useState(null)
    const handleVideoCall = (e) => {
        e.preventDefault();
        console.log(e?.target?.meeting?.value);
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/get-token?channelName=` + e?.target?.meeting?.value)
            .then(res => res.json())
            .then(data => {
                const rtcProps = {
                    appId: "dd59321650a748728c748a7eb21637ff",
                    channel: e?.target?.meeting?.value,
                    token: data.token,
                };
                console.log("data", data.token);
                setToken(rtcProps)
            });
    }
    const callbacks = {
        EndCall: () => setToken(null),
    };
    const handleJoinVideoCall = e => {
        e.preventDefault();
        const rtcProps = {
            appId: "dd59321650a748728c748a7eb21637ff",
            channel: e?.target?.meeting?.value,
            token: e?.target?.token?.value,
        };
        console.log("data", e?.target?.meeting?.value);
        setToken(rtcProps)
    }

    return token !== null ? (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <AgoraUIKit rtcProps={token} callbacks={callbacks} />
        </div>
    ) : (
        role === "Doctor" ? <>
            <form onSubmit={handleVideoCall}>
                <input type="text" placeholder="Enter the meeting name" id="meeting" name='meeting' />
                <input type="submit" value="Submit" />
            </form>
            {/* <h3 onClick={() => setVideoCall(true)}>Join</h3> */}
        </> : <form onSubmit={handleJoinVideoCall}>
            <input type="text" placeholder="Enter the meeting name" id="meeting" name='meeting' />
            <input type="text" placeholder="Enter the meeting token" id="token" name='token' />
            <input type="submit" value="Submit" />
        </form>
    );

}

export default VideoCall;