import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { Todos } from './types/Type';
import Message from './components/Message';

/*
function App() {
  let name: string = "Kürşad";
  let age: number | string = 27; // String or Number
  let activeUser: boolean = true;
  let nonTypeVariable: any = "test";*/

  // Creating object
   /*let obj = {
    name: "Kürşad",
    age: 27,
    activeUser: true
  }*/
/*
  // Object with Type
  type ObjTypes = {
    name: string,
    age?: number, // ? : Optional
    activeUser: boolean
  }

   let obj: ObjTypes = {
    name: "Kürşad",
    age: 27,
    activeUser: true
  }

  // Interface extends type
  interface ObjInterface extends ObjTypes {
    semester?: number
  }

  let objInterface: ObjInterface = {
    name: "Kürşad",
    age: 27,
    activeUser: true,
    semester: 2
  }*/

  const App:React.FC = () => { // Definining functional component with arrow function. FC: Functional Component

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])

  console.log(todos, "todos");

  const addMessage = () => {
    if(todo) setTodos([...todos, {message: todo, id: todos.length+1}]) // ... : Spreat operators
    setTodo(''); // Clear input after add
  }

  const deleteMessage = (id: number) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message deleteMessage={deleteMessage} todos = {todos}/>
    </div>
  );
}

export default App;
