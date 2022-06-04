//sniappets to creat arrow function for react =>race

// import Button from './Button'
import { FaTasks } from 'react-icons/fa';
import styled from 'styled-components';
import {IoIosAddCircleOutline} from 'react-icons/io';
 

const ButtonModal = styled.button`
display: inline-block;
background: #2DA94F;
color: #fff;
border: none;
padding: 5px 10px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;
&:focus {
    outline: none;
  }
`




const Header = ({title , onclick ,openModal}) => {
 
    return (
       <header className='header'>
           <h1 className="heading text-3xl inline mt-2" ><FaTasks className="inline mb-10"/>  {title}</h1>
           {/* <Button onclick={onclick}  text ='Add' /> */}
           <ButtonModal  onClick={openModal}>
         
               Add Task 
               <IoIosAddCircleOutline className="inline " style={{fontSize : "20px", marginBottom:"4px"}}/>
               </ButtonModal>
        
        
       </header>
    )
}
 
Header.defaultProps ={
    title:'Task Tracker'
}
// const headingStyle = {
//     color: "red",
//     backgroundColor:"#333",
//     padding: "10px"
// }

export default Header
