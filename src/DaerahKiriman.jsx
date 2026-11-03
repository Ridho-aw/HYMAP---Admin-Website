import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import TableData from './components/tableData';
import ModalEditDaerah from './components/ModalEditDaerah';
import ModalDelete from './components/ModalDelete';
import ModalBuyerList from './components/ModalBuyerList';
import { fetchUsersData } from './services/userDataService';

function DaerahKiriman() {
    const { AdminUsername } = useOutletContext();
    const [regionGroups, setRegionGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [buyerModalOpen, setBuyerModalOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedBuyerData, setSelectedBuyerData] = useState({ regionName: '', buyersList: [] });

    useEffect(() => {
        const loadData = async () => {
            const rawUsers = await fetchUsersData();

            const groupedData = rawUsers.reduce((acc, user) => {
                const cityName = user.address.city;
                const streetName = user.address.street;
                const listPembeli = [user.name, `Keluarga ${user.username.substring(0, 4)}`];
                const testPembeliRandom = (user.id % 4) + 2;

                for (let i = 2; i < testPembeliRandom; i++) {
                    listPembeli.push(`${user.username[i].substring(0, 4)}`);
                }
                // aduhhhhh nge bug mulu dah, Note perbaikan besok. ini bug nya namanya ga keluar mulu

                let group = acc.find(g => g.groupName === cityName);
                if (!group) {
                    group = {
                        id: `GRP-${user.id}`,
                        groupName: cityName,
                        subRegions: []
                    };
                    acc.push(group);
                }

                group.subRegions.push({
                    id: user.id,
                    name: streetName,
                    buyersCount: listPembeli.length,
                    buyersList: listPembeli,
                });

                return acc;
            }, []);

            setRegionGroups(groupedData);
            setLoading(false);
        };
        loadData();
    }, []);

    const handleOpenEdit = (groupIndex, subRegion) => {
        setSelectedItem({ groupIndex, ...subRegion });
        setEditModalOpen(true);
    };

    const handleSaveEdit = (updatedData) => {
        setRegionGroups(prevGroups => {
            const newGroups = [...prevGroups];
            const group = newGroups[selectedItem.groupIndex];
            const subIndex = group.subRegions.findIndex(sub => sub.id === selectedItem.id);

            if (subIndex !== -1) {
                group.subRegions[subIndex] = {
                    ...group.subRegions[subIndex],
                    name: updatedData.subRegion,
                    buyersCount: updatedData.buyersCount
                };
            }
            return newGroups;
        });
        setEditModalOpen(false);
    };

    const handleOpenDelete = (groupIndex, subRegion) => {
        setSelectedItem({ groupIndex, ...subRegion });
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        setRegionGroups(prevGroups => {
            const newGroups = [...prevGroups];
            const group = newGroups[selectedItem.groupIndex];
            group.subRegions = group.subRegions.filter(sub => sub.id !== selectedItem.id);

            if (group.subRegions.length === 0) {
                return newGroups.filter((_, index) => index !== selectedItem.groupIndex);
            }

            return newGroups;
        });
        setDeleteModalOpen(false);
    };

    const handleOpenBuyerList = (subRegion) => {
        setSelectedBuyerData({ regionName: subRegion.name, buyersList: subRegion.buyersList });
        setBuyerModalOpen(true);
    };

    const tableHeaders = ["Sub-Wilayah (Jalan)", "Jumlah Pembeli", "Rincian Pembeli", "Aksi"];

    return (
        <main className="flex-grow-1 p-5">
            <h2 className="fs-3 fw-bold text-black mb-4">Data Daerah Kiriman & Grup Wilayah</h2>

            {loading ? (
                <p>Memuat data dari server...</p>
            ) : (
                <div className="d-flex flex-column gap-5">
                    {regionGroups.map((group, groupIndex) => {
                        const totalGroupBuyers = group.subRegions.reduce((sum, item) => sum + item.buyersCount, 0);

                        return (
                            <div key={group.id} className="card shadow-sm border-0">
                                <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center py-3 px-4">
                                    <h4 className="fs-5 fw-bold mb-0"> Grup Kota: {group.groupName}</h4>
                                    <span className="badge bg-light text-dark fs-6">
                                        Total Pembeli: <strong>{totalGroupBuyers} Orang</strong>
                                    </span>
                                </div>
                                <div className="card-body p-0">
                                    <TableData headers={tableHeaders}>
                                        {group.subRegions.length > 0 ? (
                                            group.subRegions.map((sub) => (
                                                <tr key={sub.id}>
                                                    <td
                                                        className="fw-bold px-3 text-primary text-decoration-underline"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => handleOpenBuyerList(sub)}
                                                        title="Klik untuk melihat daftar pembeli"
                                                    >
                                                        {sub.name}
                                                    </td>
                                                    <td className="px-3">
                                                        <span className="badge bg-info text-dark px-2 py-1">
                                                            {sub.buyersCount} Pembeli
                                                        </span>
                                                    </td>
                                                    <td className="px-3">
                                                        <small className="text-muted">
                                                            {sub.buyersList.slice(0, 2).join(', ')}...
                                                        </small>
                                                    </td>
                                                    <td className="px-3">
                                                        <button
                                                            className="btn btn-sm btn-outline-primary me-2"
                                                            onClick={() => handleOpenEdit(groupIndex, sub)}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleOpenDelete(groupIndex, sub)}
                                                        >
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center py-3 text-muted">
                                                    Tidak ada sub-wilayah dalam grup ini.
                                                </td>
                                            </tr>
                                        )}
                                    </TableData>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <ModalBuyerList
                isOpen={buyerModalOpen}
                onClose={() => setBuyerModalOpen(false)}
                regionName={selectedBuyerData.regionName}
                buyersList={selectedBuyerData.buyersList}
            />

            <ModalEditDaerah
                isOpen={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                data={selectedItem ? {
                    groupName: regionGroups[selectedItem.groupIndex]?.groupName,
                    subRegion: selectedItem.name,
                    buyersCount: selectedItem.buyersCount
                } : null}
                onSave={handleSaveEdit}
            />

            <ModalDelete
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                itemTitle={selectedItem?.name}
            />
        </main>
    );
}

export default DaerahKiriman;