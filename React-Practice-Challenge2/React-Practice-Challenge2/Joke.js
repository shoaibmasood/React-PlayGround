//another way to write same h3 is using this syntx <h3 style={{display: !props.joke.question && "none"}}>Question: {props.joke.question}</h3>


import React from "react"

function Joke(props){
    return(
        <div>
            <h3 style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h3>
            
            <p>Answer: {props.joke.punchline} </p>
            <br />
            <hr />
        </div>
    )
}
export default Joke