import './App.css';

function App() {
  let name: string = "Kürşad";
  let age: number | string = 27; // String or Number
  let activeUser: boolean = true;
  let nonTypeVariable: any = "test";

  // Creating object
   /*let obj = {
    name: "Kürşad",
    age: 27,
    activeUser: true
  }*/

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
  }
 

  return (
    <div className="App">
      {name + ", " + age}
    </div>
  );
}

export default App;
