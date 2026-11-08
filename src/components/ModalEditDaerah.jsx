import { useState, useEffect } from 'react';

function ModalEditDaerah({ isOpen, onClose, data, onSave }) {
    const [formData, setFormData] = useState({ groupName: '', subRegion: '', buyersCount: 0 });

    useEffect(() => {
        if (data) {
            setFormData({
                groupName: data.groupName || '',
                subRegion: data.subRegion || '',
                buyersCount: data.buyersCount || 0
            });
        }
    }, [data]);

    if (!isOpen) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="content modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">Edit Data Wilayah</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Grup Wilayah</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.groupName}
                                    onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Wilayah Anakan / Sub-wilayah</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.subRegion}
                                    onChange={(e) => setFormData({ ...formData, subRegion: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Jumlah Pembeli</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={formData.buyersCount}
                                    onChange={(e) => setFormData({ ...formData, buyersCount: parseInt(e.target.value) || 0 })}
                                />
                            </div>
                            <div className="d-flex justify-content-end gap-2 mt-4">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>Batal</button>
                                <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalEditDaerah;