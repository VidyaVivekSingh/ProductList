import React, { Component } from 'react';
import Nav from '../Navbar/Navbar'
import Foot from '../Footer/Footer'
import Body from '../Body/Body'

class Layout extends Component {
    render(){
        return(
            <div>
                <div>
                    <Nav></Nav>
                </div>
                <div>
                <Body></Body>
                </div>
                
                <div>
                    <Foot></Foot>
                </div>
            </div>
        )

    }
}
export default Layout;