import { Component } from "react";

export class Deck extends Component {
    constructor(){
        super();
        this.state = {
            name: "Jake",
            age: 30
        }
    }
    updateName(){
        this.setState({name:"Leopold", age:40})
    }
    render (){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <p>{this.state.age}</p>
                <button onClick={() => this.updateName()}>Click</button>
            </div>
        )
    }
}