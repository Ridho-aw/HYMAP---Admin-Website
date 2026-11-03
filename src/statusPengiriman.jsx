import { useState, useEffect } from 'react';
import TableData from './components/tableData';
import { fetchUsersData } from './services/userDataService';

function StatusPengiriman() {
    const [pengiriman, setPengiriman] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchUsersData();
            setPengiriman(data);
            setLoading(false);
        };
        loadData();
    }, []);

    const tableHeaders = ["ID", "Nama", "Alamat", "Status Pengiriman", "Status Pembayaran"];

    return (
        <main className="p-5">
            <h1 className="fs-2 fw-normal text-dark mb-4">Welcome Back! Admin.</h1>
            <h2 className="fs-3 fw-bold text-black mb-4">Kelola Status Pengiriman</h2>

            {loading ? (
                <p>Memuat data JSONPlaceholder...</p>
            ) : (
                <TableData headers={tableHeaders}>
                    {pengiriman.map((item) => (
                        <tr key={item.id}>
                            <td className="fw-bold px-3">PL-{item.id.toString().padStart(3, '0')}</td>
                            <td className="px-3">{item.name}</td>
                            <td className="px-3">{`${item.address.street}, ${item.address.city}`}</td>
                            <td className="px-3">
                                <div className="d-flex align-items-center gap-2">
                                    <select className="form-select form-select-sm w-auto" defaultValue="belum">
                                        <option value="terkirim">Terkirim</option>
                                        <option value="belum">Belum</option>
                                    </select>
                                    <button className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
                                        <i className="bi bi-image"></i> Lihat Bukti
                                    </button>
                                </div>
                            </td>
                            <td className="px-3">
                                <select className="form-select form-select-sm w-auto" defaultValue="pending">
                                    <option value="cash">Cash</option>
                                    <option value="transfer">Transfer</option>
                                    <option value="bon">Bon</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </TableData>
            )}
        </main>
    );
}

export default StatusPengiriman;