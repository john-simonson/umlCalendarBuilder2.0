import React from 'react';
import $ from 'jquery';
import react from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class SMS extends React.Component {
    state = {
        text: {
            recipient: '',
            textmessage: ''
        }
    }

    sendText =  _ => {
        const { text } = this.state
        //pass vars within query string
        fetch('http://localhost:4000/send-text?recipient=' + text.recipient + '&textmessage=' + text.message)
        .catch(err => console.error(err))
    }

    render(){
        const { text } = this.state;
        const spacer = {
            margin: 8
        }
        const textArea = {
           borderRadius: 4 
        }

        return (
            <div>
                <center>
                <h2>Send Text Message</h2>
                <label>Phone Number</label>
                <br/>
                <input value={text.recipient} onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
                <div style={spacer} />
                <br />
                <textArea rows={3} value={text.textmessage}
                    onChange={e => this.setState({ text: { ...text, textmessage: e.target.value} })} />
                <div style={spacer} />
                <button onClick={this.sendText}>Send Text</button>
                </center>
            </div>
        )
    }
}