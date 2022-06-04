
import { PropTypes } from 'prop-types';
import {IoIosAddCircleOutline} from 'react-icons/io';

const Button = ({color,text,onclick}) => {
    return ( 
        <button onClick={onclick} className="btn inline font-bold" style={{background:color}}>{text} <IoIosAddCircleOutline style={{fontSize : "20px", marginBottom:"-4px ,inline"}}/></button>

    )
}
Button.defaultProps ={
    color:'#3A81F1',
    text:'add'
}
Button.propTypes ={
    text:PropTypes.string,
    color:PropTypes.string,
    adding:PropTypes.func
}
export default Button
