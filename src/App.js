import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { PersonaInfo } from './components/PersonaInfo/PersonaInfo';
import { Search } from './components/Search/Search';
import { ToolContainer } from './components/ToolContainer/ToolContainer';
import { SessionContextProvider } from './context/SessionContext';

import './App.css';

function App() {
  return (
    <SessionContextProvider>
      <div className={'content'}>
        <Header tool={'Fusion Calculator'} game={'p5'} />
        <Nav />
        <Search />
        <ToolContainer game={'p5'}>
          <PersonaInfo />
        </ToolContainer>
      </div>
    </SessionContextProvider>
  );
}

export default App;
