import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { adminRoutes } from './routes'
import renderRoutes from './utils/renderRoutes'
function App() {

    return (
        <Router>
            <Routes>
                {renderRoutes(adminRoutes)}
            </Routes>
        </Router>
    );
}

export default App;
