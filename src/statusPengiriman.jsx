import { useState, useEffect } from 'react';
import TableData from './components/tableData';
import { fetchUsersData } from './services/userDataService';
import DropdownStatus from './components/DropdownStatus';

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
        <main className="p-5 bg-white">
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
                                    <DropdownStatus 
                                        defaultValue="belum"
                                        options={[
                                            { value: 'terkirim', label: 'Terkirim' },
                                            { value: 'belum', label: 'Belum' }
                                        ]}
                                    />
                                    <button className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
                                        <i className="bi bi-image"></i> Lihat Bukti
                                    </button>
                                </div>
                            </td>
                            
                            <td className="px-3">
                                <DropdownStatus 
                                    defaultValue="pending"
                                    options={[
                                        { value: 'cash', label: 'Cash' },
                                        { value: 'transfer', label: 'Transfer' },
                                        { value: 'bon', label: 'Bon' },
                                        { value: 'pending', label: 'Pending' }
                                    ]}
                                />
                            </td>
                            
                        </tr>
                    ))}
                </TableData>
            )}
        </main>
    );
}

export default StatusPengiriman;