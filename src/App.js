import './App.css';
import { Header } from './components/Header/Header';
import { ToolContainer } from './components/ToolContainer/ToolContainer';
import {SessionContextProvider} from './context/SessionContext';

function App() {
  return (
      <SessionContextProvider>

          <Header tool={'Fusion Calculator'} game={'p5'}/>
          <ToolContainer game={'p5'}>
              Izanagi-no-Okami Picaro
          </ToolContainer>
      </SessionContextProvider>
  );
}

export default App;
