/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

//Creating Class based Components approach.

import React from "react"
import ReactDOM from "react-dom"



class App extends React.Component {
    render(){
        return(
            <div>
                <Header username = "Shoaib Masood"/>
                <Greeting />
            </div>
        )
    }
}




class Header extends React.Component {
    render(){
        return(
            <div>
                <header> 
                    <p>welcome, {this.props.username}!</p>
                </header>
            </div>
        )
        
    }
}

class Greeting extends React.Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        let amOrPm
        
        if (hours < 12){
            timeOfDay = "morning"
            amOrPm = "am"
        } else if (hours >= 12 && hours <17){
            timeOfDay = "afternoon"
            amOrPm = "pm"
        } else {
            timeOfDay = "night"
            amOrPm = "pm"
        }
        return(
            <div>
                <h1>Good {timeOfDay} to  you , sir or madam! its {hours}{amOrPm}</h1>
            </div>
        )
    }    
}

ReactDOM.render(<App />, document.getElementById("root"))


//Creating Function based Components approach



//import React from "react"
//import ReactDOM from "react-dom"

// #1
// function App() {
//     return (
//         <div>
//             <Header  username= "shoaib Masood"/>
//             <Greeting />
//         </div>
//     )
// }

// #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

// #3
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }

// ReactDOM.render(<App />, document.getElementById("root"))
















