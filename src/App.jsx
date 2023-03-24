import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>Bruno Oliveira</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
