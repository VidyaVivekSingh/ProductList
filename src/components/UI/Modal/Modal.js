import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
import '../Button/Button'


class Modal extends Component {
    render() {
        return (
            <Aux>
                <Backdrop change={this.props.show} clicked={this.props.modalClosed} />
                {/* <MyButton value = "Yes" onClick = {this.ondelete}/> */}
                <div
                    className="modal"
                    style={{
                        
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;