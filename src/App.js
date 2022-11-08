import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';


const { useState } = React;

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handlInputChange = event => {
    setTodoValue(event.target.value);
  };

  const handleSubmit = () => {
    setTodoList(prevTodoValue =>
      prevTodoValue.concat({ value: todoValue })
    );
    setTodoValue("");
  };

  const handleCheckBoxClick = (listnumber, event) => {
    setTodoList(todoList.map(
        (item, index) =>
          {return{
            ...item,
            isChecked: index === listnumber ? event.currentTarget.checked : item.isChecked
          }}
      
    ))
  };

  return (
    // before
    <div className="App">
      <div className="header">To Do:
      <input type="text" value={todoValue} onChange={handlInputChange} />
      <button onClick={handleSubmit}>Save</button>
      </div>
      
      {todoList.map(
        (item, index) =>
          item.value && (
            <li>
             {/* after  */}
              <input
              
                type="checkbox"
                id='btn'
                onClick={handleCheckBoxClick.bind(null, index)}
                className="strikethrough"
              />
              {item.value}
              {item.isChecked}
            </li>
          )
      )}
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default App;