import React from 'react';
import {Button} from 'reactstrap';
import './Button.css';
class MyButton extends React.Component{
    render(){
        return(
            
                <Button color = "primary"  onClick = {this.props.onclick}>{this.props.value}</Button>
               
        )
    }
}
export default MyButton;