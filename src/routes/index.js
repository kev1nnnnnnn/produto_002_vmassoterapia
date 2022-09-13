import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

export default function RouterWeb() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>} />
            </Routes>
        </Router>

    )
}