import LoginForm from "./components/forms/LoginForm";
import Pokemon from "./components/pokemon/Pokemon";
import { useStoreUsers } from "./store/userStore";

function App() {
  const authenticated = useStoreUsers((state) => state.authenticated);

  return (
    <div style={{ padding: "5rem" }}>
      {authenticated ? <Pokemon /> : <LoginForm />}
    </div>
  );
}

export default App;
