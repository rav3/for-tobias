import React from 'react';

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            one1 : Math.floor(Math.random() * (30 - 10)) + 10,
            one2 : Math.floor(Math.random() * (30 - 10)) + 10,
            score : parseInt(0),
            value : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) =>{
        this.setState({
            value: event.target.value
        });
    }

    randomise = () =>{
        this.setState({
            one1 : Math.floor(Math.random() * (30 - 10)) + 10,
            one2 : Math.floor(Math.random() * (30 - 10)) + 10,
            value: ''
        })
    }

    handleSubmit(event) {
        if( parseInt(this.state.value) === parseInt(this.state.one1 + this.state.one2) ){
            //Correct
            this.setState({
                score: this.state.score + 1
            })
            this.randomise();
        }else{
            //Wrong
            this.setState({
                value: ''
            })
        }

        event.preventDefault();
    }


    render(){
        return(
            <div>
                <h1>Score : {this.state.score}</h1>
                <h2>{this.state.one1}</h2>
                <h2>{this.state.one2}</h2>
                <div className="divider"></div>
                <input name="result" type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} disabled={!this.state.value}/>

            </div>
        )
    }
}

export default Calculator;