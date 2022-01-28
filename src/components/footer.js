import React, { Component } from 'react';


class Footer extends Component{
    
    state = {
        name: '',
        age: 101
    }

    componentDidMount(){
        this.setState({name: 'MyName'})
    }


    changed = (evt) => {
        this.setState({name: evt.target.value})
        console.log(this.state.name)
    }
  
    render() { 

        const animals = ['cat', 'dog', 'horse'];
       
        return (
            <div>
                { animals.map( animal => {
                    return <h1> key = {animal} </h1>;
                })}
                
                { this.state.age === 11 ? (
                <React.Fragment>
                    <h2 onClick={this.props.myalert}> 
                        {this.props.trademark} </h2>
                    <input value={this.state.name}
                        onChange={this.changed} type="text" />
                    </React.Fragment>) : 
                    (<React.Fragment><h2>You can't see this</h2></React.Fragment>) }

            </div>
        )
    }
}

export default Footer;