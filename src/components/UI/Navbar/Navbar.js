import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className="fixed-top">
        <Navbar color="dark">
          <NavbarBrand href="/" className="mr-auto" style = {{color:"white",fontWeight:"bold"}}>PRODATA</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}