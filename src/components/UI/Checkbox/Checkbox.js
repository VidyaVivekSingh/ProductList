import React from 'react';
import './Checkbox.css';
import {FormGroup, Label, CustomInput } from 'reactstrap';
class CheckboxGroup extends React.Component{
    render(){
        return(
            <FormGroup>
                <Label>{this.props.label}</Label>
                <div className="row style12" >
                    <CustomInput type="checkbox" id={this.props.option1} label={this.props.option1} className = "col-4 select" name ={this.props.name} onChange = {this.props.onchange}/>
                    <CustomInput type="checkbox" id={this.props.option2} label={this.props.option2} className = "col-4 select" name ={this.props.name} onChange = {this.props.onchange}/>
                    <CustomInput type="checkbox" id={this.props.option3} label={this.props.option3} className = "col-4 select" name ={this.props.name} onChange = {this.props.onchange}/>
                </div>
            </FormGroup>
        )
    }
}
export default CheckboxGroup;