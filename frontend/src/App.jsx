import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>투두 앱</h1>;
}

export default App;