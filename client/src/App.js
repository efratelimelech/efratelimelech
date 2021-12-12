import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import Main from './components/main';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main></Main>
      </Provider>
    </div>
  );
}

export default App;
