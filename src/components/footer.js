import React, { Component } from 'react';


class Footer extends Component{

    changed(){
        console.log("Changed")
    }
  
    render() { 
       
        return (
            <div>
                <h2 onClick={this.props.myalert}> 
                    {this.props.trademark} </h2>
                <input onChange={this.changed} type="text" />
            </div>
        )
    }
}

export default Footer;