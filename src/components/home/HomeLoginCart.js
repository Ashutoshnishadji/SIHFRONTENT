import React,{useState} from 'react'
import './HomeLoginCart.css'
// import GroupsIcon from '@mui/icons-material/Groups';
import Modal from 'react-modal';
import { Navigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width : '400px',
  },
};


Modal.setAppElement(document.getElementsByClassName('homeLoginCart'));

export default function HomeLoginCart({type,loginIdType,icon, text}) {

  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')

  // const navigate = Navigate()
  // const afterOpenModal = ()=> {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = ()=> {
    setIsOpen(true);
  }
  
  const closeModal = ()=> {
    setIsOpen(false);
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log('Id is >>>',userId)
    console.log('Password is >>>',userPassword)
    setUserId('')
    setUserPassword('')
    closeModal()
    // navigate(`/${type}/${}`)
  }
  return (
    <>
    <div onClick={()=>{openModal()}} className='homeLoginCart'>
         {icon}
        <p>{text}</p>
    </div>
    <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // className={'homeModel'}
        contentLabel="Example Modal"
      >
          <h3>Login Here</h3>
          <form className='loginForm'>
              <label htmlFor="id">{loginIdType}</label><input onChange={(e)=>{setUserId(e.target.value) }} type="text" value={userId} name="userId" id="id" />
              <label htmlFor="password">Password</label><input onChange={(e)=>{setUserPassword(e.target.value) }} type="password" value={userPassword} name="password" id="password" />
            <button onClick={(e)=>{handleLogin(e)}}>Login</button>
          </form>
        
      </Modal>
    </>
  )
}
