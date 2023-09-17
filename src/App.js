import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { PersonaInfo } from './components/PersonaInfo/PersonaInfo';
import { Search } from './components/Search/Search';
import { ToolContainer } from './components/ToolContainer/ToolContainer';
import { SessionContextProvider } from './context/SessionContext';

function App() {
  return (
    <SessionContextProvider>
      <Header tool={'Fusion Calculator'} game={'p5'} />
      <Nav />
      <Search />
      <ToolContainer game={'p5'}>
        <PersonaInfo />
      </ToolContainer>
    </SessionContextProvider>
  );
}

export default App;
