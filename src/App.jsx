import "./App.css";
import { UserContextProvider } from "./contexts/Context API/user-context-provider";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <UserContextProvider>
        <UserProfile />
      </UserContextProvider>
    </>
  );
}

export default App;
