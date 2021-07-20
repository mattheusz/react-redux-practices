import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from "react-redux";
import store from './redux/store'
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewHookCakeContainer from './components/NewHookCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
        {/*
          <CakeContainer />
          <HookCakeContainer />
          <IceCreamContainer />
          <NewHookCakeContainer />
        */}
      </Provider>
    </div >
  );
}

export default App;
