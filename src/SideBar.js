import React, {Component} from 'react'
import ReactDOM from "react-dom";



class SideBar extends Component{
    render(){
        const {sideName} = this.props;
        return <h1> This is the {sideName} </h1>;
    }
}

export default SideBar