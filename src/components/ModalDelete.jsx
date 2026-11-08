function ModalDelete({ isOpen, onClose, onConfirm, itemTitle }) {
    if (!isOpen) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="content modal-content">
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title fw-bold">Konfirmasi Hapus</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body py-4">
                        <p className="mb-1 fs-6">Apakah Anda yakin ingin menghapus data wilayah berikut dari tabel?</p>
                        <p className="fw-bold text-dark fs-5 mb-0">"{itemTitle}"</p>
                        <small className="text-muted d-block mt-2">
                            *Penghapusan ini hanya bersifat sementara di sisi tampilan (Front-end).
                        </small>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light border" onClick={onClose}>Batal</button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>Ya, Hapus</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;