
import React,{useState} from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [message, setMessage] = useState('');

  return (
    <div className='parent'>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child1 setMessage={setMessage} />
        <Child2 setMessage={setMessage} />
        {
          <p>Selected Option: {message}</p>
        }
    </div>
  )
}

export default App
