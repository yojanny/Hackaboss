import "./App.css";
import { UserList } from "./components/UserList";
import userData from "./users.json";

function App() {
  console.log(userData);
  return (
    <div className="App">
      <UserList users={userData}></UserList>
    </div>
  );
}

export default App;
