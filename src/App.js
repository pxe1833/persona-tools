import { FusionFrom } from './components/Fusion/FusionFrom';
import { FusionTo } from './components/Fusion/FusionTo';
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
        <Header />
        <Nav />
        <Search />
        <ToolContainer>
          <PersonaInfo />
        </ToolContainer>
        <ToolContainer>
          <FusionFrom />
        </ToolContainer>
        <ToolContainer>
          <FusionTo />
        </ToolContainer>
      </div>
    </SessionContextProvider>
  );
}

export default App;
