import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import DaerahKiriman from "./DaerahKiriman"
import MainLayout from "./components/Layout/MainLayout";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/daerahKiriman" element={<DaerahKiriman />} />
            </Route>
        </Routes>
    );
}

export default App;