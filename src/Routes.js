import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage} from './components/HomePage';
import { RecommendationPage } from "./components/RecommendationPage";
import { NotFoundPage } from "./components/NotFoundPage";


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Navigate to="/homepage" />} />
                <Route path="/homepage" exact element={<HomePage />} />
                <Route path="/recommendation" element={<RecommendationPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}