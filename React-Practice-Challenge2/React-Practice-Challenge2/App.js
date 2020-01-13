import React from "react"

import Joke from "./Joke"

function App(){
    return(
        <div className="joke"> 
            <Joke 
            joke = {{punchline: "whose there"}}
            />
            <Joke 
            joke = {{question: "knock knock", punchline: "whose there"}}
            />
            <Joke 
            joke = {{question: "knock knock", punchline: "whose there"}}
            />
            <Joke 
            joke = {{question: "knock knock", punchline: "whose there"}}
            />
            <Joke 
            joke = {{question: "knock knock", punchline: "whose there"}}
            />
            <Joke 
            joke = {{question: "knock knock", punchline: "whose there"}}
            />
        </div>
        
    )
}

export default App