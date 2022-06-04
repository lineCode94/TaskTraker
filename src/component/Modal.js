import React from 'react'
 import styled from 'styled-components'
 import {TiTimesOutline} from 'react-icons/ti';
 import { useState } from 'react';
 import {VscSaveAs} from 'react-icons/vsc';
 import {MdNotificationsActive} from 'react-icons/md';
 import {FiEdit} from 'react-icons/fi';
 import {BiTask} from 'react-icons/bi';
 import {MdToday} from 'react-icons/md';
 import {   toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
const Backgruond = styled.div`
 width: 100%;
 height:100%;
 background: rgb(0,0,0,0.7);
 position: fixed;
 display: flex;
 justify-content: center;
 align-items: center;
 top:0
 `
 const ModalWrapper =styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16px rgba(0,0,0,1);
background: #fff;
color: #000;
position: relative;
z-index: 10;
border-radius: 10px;
 
 
 `
const CloseModal = styled.button` 
display: inline-block;
background: #EA4335;
color: #fff;
border: none;
padding: 5px 10px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 20px;
font-family: inherit;
position: absolute;
right: 10px;

&:focus {
    outline: none;
  }
 `
 const Heading =styled.h1`
   text-align: center;
    color:#333
 
 ` 
 const notify = () => toast.error("Add Text !!");

const Modal = ({showModal,setshowModal,onAdd}) => {
    const [text,setText] =useState('')
    const [day,setDay] =useState('')
    const [reminder,setReminder] =useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            notify()

            return('')
        }

        
        onAdd( {text,day,reminder} )

        setText('')
        setDay('')
        setReminder(false)//must put the default value

        setshowModal(showModal =>!showModal) 
    }


    return (
        < >
          {showModal ? (
              <Backgruond>
                  
                  <ModalWrapper style={{marginBottom:'50px',height:'430px', paddingBottom:'5px' }}  className='mt-8       w-20 sm:w-50' showModal={showModal}>
                  <CloseModal
                  onClick={()=>setshowModal(showModal =>!showModal)}
                  ><TiTimesOutline/></CloseModal>
                  <Heading className='text-3xl'>
                     <FiEdit className='inline text-3xl' style={{margin:"-3px"}}/> Add Task
                  </Heading>
        <div className="container-form">

            <form className='add-form' onSubmit={onSubmit}>

                <div className="form-control">
                    <label > <BiTask  className='inline text-xl' style={{margin:"-3px"}}/> Task</label>
                    <input type="text" className='border border-gray-300   focus:ring-indigo-500' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
                </div>

                <div className="form-control">
                    <label  > <MdToday  className='inline text-xl ' style={{margin:"-3px"}} /> Day & Time</label>
                    <input type="date"className='border border-gray-300  ' 
                    value={day} onChange={(e) => setDay(e.target.value)}
                    />
                </div>

                <div className="form-control form-control-check">
                    <label  ><MdNotificationsActive  className='inline text-xl'/> Set Reminder</label>
                    <input
                    className='border-gray-300'
                    type="checkbox" 
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
                </div>


                    <button style={{background:"#2DA94F"    }} 
                    className='btn btn-block  '
                     type="submit" >
                         <VscSaveAs className='inline' style={{color:"#fff",margin:"0px 10px -3px",fontSize:"20px" }}/>
                         Save Task</button>


                    </form>

            </div>
        
                  </ModalWrapper>

              </Backgruond>
          ) : ''}
        </ >
    )
}

export default Modal
