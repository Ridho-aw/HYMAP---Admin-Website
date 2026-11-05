import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import DaerahKiriman from "./DaerahKiriman"
import MainLayout from "./components/Layout/MainLayout";
import StatusPengiriman from "./statusPengiriman";
import StokGalon from "./stokGalon";
import Login from "./Login";
import KelolaSopir from "./kelolaSopir";
import KelolaPelanggan from "./KelolaPelanggan";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/kelolaSopir" element={<KelolaSopir />} />
                <Route path="/kelolaPelanggan" element={<KelolaPelanggan />} />
                <Route path="/daerahKiriman" element={<DaerahKiriman />} />
                <Route path="/statusPengiriman" element={<StatusPengiriman />} />
                <Route path="/stokGalon" element={<StokGalon />} />
            </Route>
        </Routes>
    );
}

export default App;