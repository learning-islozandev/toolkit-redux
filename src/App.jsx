import { useSelector, useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {

  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>const is {counter}</p>
      <div className="card">
        <button onClick={() => dispatch(increment())}> Incremente </button>
        <button onClick={() => dispatch(decrement())}> Decrement </button>
        <button onClick={() => dispatch(incrementByAmount(2))}> Increment By 2 </button>

      </div>

    </>
  )
}

export default App

