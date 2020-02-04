import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        // this.handleClick = this.handleClick.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }
   
    handleClick = () => {
       this.setState( prevState =>{
           let limit = prevState.count
           if (limit >= 10){
               {
                   count: prevState.count = 0
                   
               }
               return 0
           } else {
                return {
                count: prevState.count + 1
           }    
           }
           
       })
    }
    
    handleAdd(){
       this.setState(prevState => {
           let limit = prevState.count
           if (limit >=10){
               {
                   count: prevState.count = 0
               }
               return{
                   
               }
           } else {
            return {
               count: prevState.count + 2
           }    
           }
           
       })
    }
    
    handleDecrement(){
       this.setState(prevState => {
           let limit = prevState.count
           if (limit == 0){
               {
                   count: prevState.count = 0
               }
           } else {
            return {
               count: prevState.count - 1
           }    
           }
           
       })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <br/>
                <button onClick={this.handleAdd}>add +2 to previous state </button>
                <button onClick={this.handleDecrement}>Decrement number </button>
            </div>
        )
    }
}

export default App

//  this.setState( prevState => {
//             return 
//             if (prevState.count == 20){
//                 count: prevState.count = 0
//             } else {
                
//             {
//                 count: prevState.count + 2
//             }
//                    }
//         })
