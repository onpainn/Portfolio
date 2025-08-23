import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import PortfolioMain from "./pages/home/PortfolioMain";
import { CardDetails } from "./components/element/details/CardDetails";


export function MainRoutes() {
    return (
    <Router>
        <Routes >
            <Route element={<Layout />}>
                <Route path="/" element={<PortfolioMain />} />
                <Route path="/project/:id" element={<CardDetails />}/>
            </Route>
        </Routes>
    </Router>
    )
}