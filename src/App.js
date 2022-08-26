import { Routes, Route } from 'react-router-dom';
import { NatureArticles } from './pages/NatureArticles/NatureArticles';
import { SportsArticles } from './pages/SportsArticles/SportsArticles';
import { Articles } from './components/Articles/Articles';
import './App.css';
import { Container } from './UI/Container/Container';
import { Header } from './components/Header/Header';
import { useSelector } from 'react-redux';
import { selectArticles } from './features/articles/articlesSlice';

function App() {
  const { isLoading, error } = useSelector((state) => state.articles);
  const items = useSelector(selectArticles);

  return (
    <div className="wrapper">
      <Container>
        <Header />
        <div className="content">
          <div className="routes">
            <Routes>
              <Route path="/" element={<NatureArticles />} />
              <Route path="/sport" element={<SportsArticles />} />
            </Routes>
          </div>
          {error && <>Sorry there was an error</>}
          <Articles items={items} isLoading={isLoading} />
        </div>
      </Container>
    </div>
  );
}

export default App;
