import './App.scss';
import MainNavigation from './router/MainNavigation';
import SmoothScroll from './utils/lenis';

function App() {

  return (
    <SmoothScroll>
      <MainNavigation />
    </SmoothScroll>
  );

}

export default App;