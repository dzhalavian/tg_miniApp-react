import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram";


function App() {

  const {user, onClose} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      work
    </div>
  );
}

export default App;
