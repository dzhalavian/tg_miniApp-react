import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram";
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header />
      <Router>
      <Switch>
        <Route path="/form" component={Form} />
        <Route index element={<ProductList />}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
