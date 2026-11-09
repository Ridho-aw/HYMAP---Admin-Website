import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function StokGalon() {
    const [galonDipinjam, setGalonDipinjam] = useState(67);
    const [stokGalon, setStokGalon] = useState(727);
    const [galonRusak, setGalonRusak] = useState(0);

    // State untuk mengontrol mode edit
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <main className="p-5 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fs-3 fw-bold text-black m-0">Kelola Galon</h2>
                
                <button 
                    className={`btn btn-sm ${isEditing ? 'btn-success' : 'btn-outline-success'}`} 
                    onClick={toggleEdit}
                >
                    {isEditing ? 'Simpan Data' : 'Edit Data'}
                </button>
            </div>
            
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
                        
                        <div className="col-md-4 mb-3 mb-md-0">
                            <h4 className="fw-bold text-dark mb-2">Galon dipinjam</h4>
                            {isEditing ? (
                                <input 
                                    type="number" 
                                    className="form-control text-center mx-auto fs-4 fw-bold" 
                                    style={{ maxWidth: '120px' }}
                                    value={galonDipinjam} 
                                    onChange={(e) => setGalonDipinjam(e.target.value)} 
                                />
                            ) : (
                                <h2 className="fw-bold text-dark m-0">{galonDipinjam}</h2>
                            )}
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0">
                            <h4 className="fw-bold text-dark mb-2">Stok Galon</h4>
                            {isEditing ? (
                                <input 
                                    type="number" 
                                    className="form-control text-center mx-auto fs-4 fw-bold" 
                                    style={{ maxWidth: '120px' }}
                                    value={stokGalon} 
                                    onChange={(e) => setStokGalon(e.target.value)} 
                                />
                            ) : (
                                <h2 className="fw-bold text-dark m-0">{stokGalon}</h2>
                            )}
                        </div>

                        <div className="col-md-4">
                            <h4 className="fw-bold text-dark mb-2">Galon Rusak</h4>
                            {isEditing ? (
                                <input 
                                    type="number" 
                                    className="form-control text-center mx-auto fs-4 fw-bold" 
                                    style={{ maxWidth: '120px' }}
                                    value={galonRusak} 
                                    onChange={(e) => setGalonRusak(e.target.value)} 
                                />
                            ) : (
                                <h2 className="fw-bold m-0">{galonRusak}</h2>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default StokGalon;