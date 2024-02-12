import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [bookData, setBookData] = useState({})

  const submit = (e) => {
    e.preventDefault();
    console.log("Submitting");

    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookData),
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>books</h1>
        <form onSubmit={submit}>
          <input type="string" id="name"></input>
          <input type="string" id="author"></input>
          <input type="number" id="pages"></input>
          <input type="submit" id="submit" ></input>
        </form>
      </header>
    </div>
  );
}

export default App;
