import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routeList from './routes'

function App() {
  return (
    <Router>
      <Routes>
        {showContentMenus(routeList)}
      </Routes>
    </Router>
  );

  function showContentMenus(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main}
          />
        );
      });
    }
    return <Routes>{result}</Routes>;
  }
}

export default App;
