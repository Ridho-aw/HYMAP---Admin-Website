import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import DaerahKiriman from "./DaerahKiriman"
import MainLayout from "./components/Layout/MainLayout";
import StatusPengiriman from "./statusPengiriman";
import StokGalon from "./stokGalon";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/daerahKiriman" element={<DaerahKiriman />} />
                <Route path="/statusPengiriman" element={<StatusPengiriman />} />
                <Route path="/stokGalon" element={<StokGalon />} />
            </Route>
        </Routes>
    );
}

export default App;