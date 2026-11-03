import './styles/Dashboard.css';
import { useOutletContext } from 'react-router-dom';

function dataDaerahKiriman() {
    const { adminUsername } = useOutletContext();

    return (
        <main className="p-5">
            <h1 className="fs-2 fw-normal text-dark mb-4">
                Halaman Data Daerah Pengiriman.
            </h1>
        </main>
    );
}

export default dataDaerahKiriman;