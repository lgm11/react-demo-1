import reactDom from 'react-dom'
import React from 'react'

let n = 0
const App =() =>{
    return (
        <div>
            {n}
            <button onClick={
                ()=>{
                 n += 1
                 reactDom.render(<App />,document.getElementById('root'))
             }
            }>
            +1
            </button>
        </div>
    )
}


export default App 