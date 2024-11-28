import React, { useState, createContext, useContext, useEffect } from 'react';
import './App.css'



const TodoContext = createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  const [fetchedData, setFetchedData] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    console.log('Todo list updated:', todos);
  }, [todos]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setFetchedData(data));
  }, []); 

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
        <header style={{ marginBottom: '20px' }}>
          <h1 style={{ color: '#4CAF50' }}>NAME: MUSENGIMANA CELINE</h1>
          <h1 style={{ color: '#4CAF50' }}>CLASS: LEVEL 5 SOD</h1>
        </header>
        <nav style={{ marginBottom: '20px' }}>
         
        </nav>



        <section id="introduction" style={{ marginBottom: '20px' }}>
          <h2> <a href="/introduction"> This Introduction of react hook</a></h2>
          <p>
            <p>the specific example demonstrating how Context can be 
              <p>used in your app. In this scenario, we'll use Context to manage a user state (e.g., user's name and login status)</p>
               and display this data throughout your application.</p>
            This project demonstrates the basic usage of three React hooks: <br /><br />
            .use state <br /> <br />
            .use effect <br />
            .use context <br />
          
           </p>
        </section>
        
        <section id="example" style={{ marginBottom: '20px' ,}}>
          <h2><a href="/examples"> This Example react hook</a></h2>
          <p>
            The example includes a simple hook react Application with functionalities to add and list todos using context and state.
          </p>
        </section>
        <section id="demonstration" style={{ marginBottom: '20px' }}>
          <h2><a href="/demonstration"> This Demonstration of react hook</a></h2>
          <p>
            This demo showcases how to manage state with: <br /><br />
            .use state <br />
            handle side effects with  <br /><br />
            :.use effect <br />

            and share state across components with : <br /><br />
            .use context <br />
        
          </p>
        </section>
        <div>
          <h1>ADD STUDENT NAME</h1>
          <TodoInput />
          <TodoList />
          
        </div>
      </div>
    </TodoContext.Provider>
  );
};

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h2>STUDENT LIST</h2>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        style={{ padding: '5px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button onClick={handleAddTodo} style={{ padding: '5px 10px', borderRadius: '4px', backgroundColor: '#4CAF50', color: '#fff', border: 'none' }}>Add</button>
      
    </div>


  );
};

export default App;
