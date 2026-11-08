function ModalBuyerList({ isOpen, onClose, regionName, buyersList }) {
    if (!isOpen) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="content modal-content">
                    <div className="modal-header bg-info text-dark">
                        <h5 className="modal-title fw-bold">Daftar Pembeli: {regionName}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {buyersList && buyersList.length > 0 ? (
                            <ul className="list-group list-group-flush">
                                {buyersList.map((buyer, index) => (
                                    <li key={index} className="list-group-item px-0">
                                        <i className="bi bi-person-fill me-2 text-secondary"></i>
                                        {buyer}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted text-center my-3">Belum ada data pembeli di wilayah ini.</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalBuyerList;