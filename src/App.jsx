import React, { useState } from 'react'
import './App.css'
// import { Button } from 'antd'
function App(props) {
  const [count, setCount] = useState(0)
  const nextPage = function(){
    props.history.push('/newpage')
  }
  return (
    <div className="App">
      <div onClick={nextPage}>前往下一个页面</div>
      123
    </div>
  )
}

export default App
