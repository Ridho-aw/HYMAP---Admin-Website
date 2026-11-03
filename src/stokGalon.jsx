import { useOutletContext } from 'react-router-dom';

function StokGalon() {
    return (
        <main className="flex-grow-1 p-5">
            <h2 className="fs-3 fw-bold text-black mb-4">Kelola Galon</h2>
            <div>
                <div className="card p-3 mb-4 shadow-sm">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div 
                                className="bg-secondary rounded" 
                                style={{ height: '110px', width: '100%' }}
                            ></div>
                        </div>
                        <div className="col-md-9">
                            <h2 className="fw-bold text-dark m-0">Stok Galon</h2>
                        </div>
                    </div>
                </div>

                <div className="card p-4 shadow-sm">
                    <div className="row text-center align-items-center">
                        <div className="col-md-6">
                            <h4 className="fw-bold text-dark mb-2">Galon dipinjam</h4>
                            <h2 className="fw-bold text-dark m-0">67</h2>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className="d-none d-md-block me-4"></div>
                            <div className="text-center w-100">
                                <h4 className="fw-bold text-dark mb-2">Stok Galon</h4>
                                <h2 className="fw-bold text-dark m-0">727</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default StokGalon;