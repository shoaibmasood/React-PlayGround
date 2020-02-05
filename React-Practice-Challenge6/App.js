import React,{Component} from "react"
/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/



class App extends Component {
  constructor() {
      super()
      this.state = {
          isLogedIn: false
      }
  }
  
  handleClick = ()=> {
      this.setState(PrevState => {
        return {
            isLogedIn: !PrevState.isLogedIn
        }    
      }
      
      )
  }
  render(){
    let ButtonText = this.state.isLogedIn ? "LOG OUT" : "LOGIN"
    let DisplayText = this.state.isLogedIn ? "loggedin" : "loggedout"   
    return(
      <div>
          <h1>You are currently {DisplayText}</h1>
          <button onClick={this.handleClick} >{ButtonText}</button>      
          
      </div> 
    )
  }
}
export default App