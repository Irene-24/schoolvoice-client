import LeaderBoard from './components/LeaderBoard';
import LeaderBoardHeader from './components/LeaderBoardHeader';
import Nav from './components/Nav';
import './styles/App.scss';

function App() {
  return (
    <>
      <Nav />
      <main className="app-bg">
        <LeaderBoardHeader />
        <LeaderBoard />
      </main>
    </>
  );
}

export default App;
