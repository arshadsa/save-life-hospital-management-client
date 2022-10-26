// import React, { useEffect, useState } from 'react';
// import ZoomVideo from '@zoom/videosdk'


// const ZOOM = () => {
//     const client = ZoomVideo.createClient()
//     client.init('en-US', 'CDN')

//     let stream
//     const [data, setData] = useState()

//     // client.join(topic, token, userName, password).then(() => {
//     //     stream = client.getMediaStream()
//     // }).catch((error) => {
//     //     console.log(error)
//     // })
//     // console.log(client.);
//     useEffect(() => {

//         fetch('http://localhost:5000/zoom', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             // body: {

//             // }
//         }).then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setData(data)
//             })
//     }, [])
//     // console.log(data)
//     return (
//         <div>
//             <button onClick={() => client.join({
//                 topic: "testing",
//                 signature: `${data}`,
//                 meetingNumber: '1234',
//                 userName: "ovilash",
//                 sdkKey: 'YzPcOP8WzzMkhtjMZ3mgrcWjrJnWsanz4fgO',
//                 //   userEmail: userEmail,
//                 //   passWord: passWord,
//                 tk: "",
//                 success: (success) => {
//                     console.log(success)
//                 },
//                 error: (error) => {
//                     console.log(error)
//                 }
//             })}>join</button>
//             {/* <button onClick={client.leave}>click</button> */}
//         </div>
//     );
// };

// export default ZOOM;