import { useSelector, useDispatch } from "react-redux";
// WITH useSelector, we can pull data from our store (REDUCERS)
// WITH useDispatch, we can actvate the function inside the reducer depending on the type

function App() {
  const counter = useSelector((state) => state.counter);
  // here we pull the state
  const signedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  // here we are activating (dispatching the type, it goes into REDUCER and it modifies the state in reducer)
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>
        {signedIn === false ? "SIGN OUT" : "SIGN IN"}
      </button>
      <h1>
        {signedIn ? "NO! We are not logged in!" : "YES! WE are logged in."}
      </h1>
    </div>
  );
}

export default App;
