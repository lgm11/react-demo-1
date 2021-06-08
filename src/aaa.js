import reactDom from 'react-dom'
import React from 'react'

let n = 99
const Component = () => {
    return (n%2 === 0 ? <div>n是偶数</div> : <span>n是奇数</span>)
    }

    export default Component