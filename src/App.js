import { HeaderComp } from './Components/Header/Header';
import { HomeComp } from './Components/Home';
import { SignUpPage } from './Components/Registration';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      {/* <SignUpPage /> */}
      <HomeComp />
    </div>
  );
}

export default App;
