import './App.css';
import arrowleft from './icons/arrowleft.svg'
import edit from './icons/edit.svg'
import attach from './icons/attachment.svg'
import send from './icons/send.png'
import camera from './icons/camera.png'
import video from './icons/video-camera.png'
import doc from './icons/download.png'
import menu from './icons/menu.svg'
import member from './icons/two-people.png'
import phone from './icons/telephone.png'
import report from './icons/cancel.png'
import { useEffect, useRef, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [dataa, setdataa] = useState([])
  // const [limitdata, setlimitdata] = useState(5)
  // const [flag,setflag] = useState(true)
  const refff = useRef(null);
  // const scrollToLastFruit = (e) => {
  //   // const lastChildElement = refff.current?.lastElementChild;
  //   // // lastChildElement?.scrollIntoView()

  //   const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   if (bottom) {setlimitdata(limitdata+5)}
  // };
  // const handleScroll = (e) => {
    
  // }
  const fetchUserData = () => {
    fetch("https://qa.corider.in/assignment/chat?page=0")
      .then(response => {
        return response.json()
      })
      .then(data => {
        // setUsers(pre =>[...pre,...data.chats.slice(0,data.chats.length-limitdata)])
        setUsers(data.chats)
        setdataa(data)
      })
  }
  useEffect(()=>{
    fetchUserData()
    // document.getElementById("scrollshit").addEventListener("scroll",scrollToLastFruit)
  },[])
  // useEffect(() => {
    
  //   const handlescroll = (e =>{
  //     const scrollHeight = e.target.documentElement.scrollHeight
  //     const currentHeight = e.target.documentElement.ScrollTop + window.innerHeight
  //     if(currentHeight + 1>=scrollHeight){
  //       console.log("works");
  //       setlimitdata(limitdata+5)
  //     }
  //   })
  //   window.addEventListener("scroll",handlescroll)
  //   // return()=>window.removeEventListener("scroll",handlescroll)
  // }, [limitdata])







  const gpu = ()=>{
    if(document.getElementById("gpopup").style.display === "none"){
      document.getElementById("gpopup").style.display = "block"
    }else {
      document.getElementById("gpopup").style.display = "none"
    }
  }
  const wpu = ()=>{
    if(document.getElementById("wpopup").style.display === "none"){
      document.getElementById("wpopup").style.display = "block"
    }else {
      document.getElementById("wpopup").style.display = "none"
    }
  }
  return (
    <div id="home">
      <div style={{display:'grid', paddingTop:"10px",margin:"20px",placeitems: "center"}}>
        <div style={{width:"20px",gridColumn:"1 / span 1",gridRow:"1"}}><img alt="demo"src={arrowleft}></img></div>
        <div style={{gridColumn:"2",gridRow:"1",fontSize:"25px",marginTop:'-5px'}}>{dataa.name}</div>
        <div style={{width:"20px",gridColumn:"50",gridRow:"1",margin:"0 0 0 auto",marginTop:'3px'}}><img alt="demo"src={edit}></img></div>
      </div>
      <div style={{display:"grid",padding:"0px",borderBottom:"solid 1px lightgrey"}}>
        <div style={{gridColumn:"1",gridRow:"1"}}>
          <div style={{display:"grid",gridTemplateColumns:"auto auto",borderRadius:"50%",width:"50px",height:"50px",overflow:"hidden"}}>
            <div><img alt="demo"width="25px"src={"https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"}></img></div>
            <div><img alt="demo"width="25px"src={"https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"}></img></div>
            <div><img alt="demo"width="25px"src={"https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"}></img></div>
            <div><img alt="demo"width="25px"src={"https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"}></img></div>
          </div>
        </div>
        <div style={{gridColumn:"2",gridRow:"1"}}>
          <div>
            <div style={{display:"flex"}}><div style={{position:"relative",top:"4px",color:"grey"}}>From</div><div style={{marginLeft:"5px",fontSize:"20px",fontWeight:"bold"}}>{dataa.from}</div></div>
            <div style={{display:"flex"}}><div style={{position:"relative",top:"4px",color:"grey"}}>To</div><div style={{marginLeft:"5px",fontSize:"20px",fontWeight:"bold"}}>{dataa.to}</div></div>
            
          </div>
        </div>
       
        <div style={{gridColumn:"50",gridRow:"1",position:"relative",top:"15px",left:"-10px"}}><img alt="demo"onClick={wpu} width="6px"src={menu}></img>
        <div id="wpopup" style={{display:"none",width:"0",height:"0",gridColumn:"3",gridRow:"1",backgroundColor:"red",position:"relative",top:"10px",right:"150px"}}>
          <div style={{backgroundColor:"#FFFFFF",width:"170px",borderRadius:"20px",boxShadow: "5px 10px 18px #888888"}}>
            <div style={{display:"flex",borderBottom:"solid 1px black",padding:"10px"}}><img alt="demo"width="30px"src={member}></img><div style={{position:"relative",top:"5px",left:"10px",fontFamily:"Poppins,sans-serif"}}>Members</div></div>
            <div style={{display:"flex",borderBottom:"solid 1px black",padding:"10px"}}><img alt="demo"width="30px"src={phone}></img><div style={{position:"relative",top:"5px",left:"10px",fontFamily:"Poppins,sans-serif"}}>ShareNumber</div></div>
            <div style={{display:"flex",padding:"10px"}}><img alt="demo"width="30px"src={report}></img><div style={{position:"relative",top:"5px",left:"10px",fontFamily:"Poppins,sans-serif"}}>Report</div></div>
          </div>
        </div>
        </div>
      </div>
      <div ref={refff} id="scrollshit"style={{height:"72vh",overflow:"scroll"}}>
        <div >
        {users.map(user => (
          <div>
          <div>{user.sender.self?<div style={{display:"flex",padding:"15px"}}><div style={{backgroundColor:"blue",margin:"10px",width:"50vw",borderTopRightRadius:"20px",borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px",padding:"10px",color:"white",margin:"0 0 0 auto"}}>{user.message}</div></div>:<div style={{display:"flex",padding:"15px"}}><div style={{borderRadius:"50%",overflow:"hidden",width:"40px",height:"40px"}}><img alt="demo"width="40px" height="40px"src={user.sender.image}></img></div>
          <div style={{backgroundColor:"white",margin:"10px",width:"50vw",borderTopRightRadius:"20px",borderBottomRightRadius:"20px",borderBottomLeftRadius:"20px",padding:"10px",color:"grey"}}>{user.message}</div></div>}</div>
          </div>
          ))}
        </div>
      </div>
        <div>
          <div style={{padding:"10px",backgroundColor:"white",display:"grid",borderRadius:"15px"}}>
            <div style={{gridRow:"1",gridColumn:"1",width:"0"}}><input id="inputtt" style={{width:"90vw",height:"23px",border:"none",fontSize:"20px"}} placeholder='message...'></input></div>
            <div id="gpopup" style={{display:"none",gridColumn:"97",gridRow:"1",width:"0",height:"0"}}><div style={{backgroundColor:"green",display:"flex",width:"100px",borderRadius:"30px",padding:"8px",position:"relative",top:"-60px",left:"-42px",boxShadow: "5px 10px 18px #888888"}}>
              <div style={{paddingRight:"10px"}}><img alt="demo" width="25px"src={camera}></img></div>
              <div style={{paddingRight:"13px"}}><img alt="demo"width="25px"src={video}></img></div>
              <div style={{paddingTop:"1px"}}><img alt="demo"width="22px"src={doc}></img></div>
              <div style={{height:"2px",borderLeft:"8px solid transparent",borderRight:"8px solid transparent",borderTop:"10px solid green",position:"relative",left:"-55px",top:"32px"}}></div>
            </div></div>
            <div id="shareb" style={{gridRow:"1",gridColumn:"97"}}><img onClick={gpu} width="22px"src={attach}></img></div>
            <div id="sendb" style={{gridRow:"1",gridColumn:"100"}}><img width="25px"src={send}></img></div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
