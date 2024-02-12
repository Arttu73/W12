import './App.css';

function App() {

  

  const submit = (e) => {
   
    e.preventDefault();
    console.log("Submitting");
    
    var name = e.target.name.value;
    var author = e.target.author.value;
    var pages = e.target.pages.value;
    
    fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "author": author,
        "pages": pages
      }),
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
