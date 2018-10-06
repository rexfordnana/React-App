import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table'
import Form from './Form'
import SideBar from "./SideBar";

class App extends Component {
    state = {
        characters: [],
    };
    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i)=>{
                return i!==index;
            })
        });
    };
    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    };
    render() {
    return (

        <div className='container'>
            <div className='float-left small-container'>
                <SideBar sideName='TeeMan'/>
            </div>
            <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit} />
        </div>
    );
  }
}

export default App;
