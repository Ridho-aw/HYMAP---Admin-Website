import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import StatistikItem from './components/StatistikItem';

function StokGalon() {
    const [galonDipinjam, setGalonDipinjam] = useState(67);
    const [stokGalon, setStokGalon] = useState(727);
    const [galonRusak, setGalonRusak] = useState(0);

    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <main className="flex-grow-1 p-5">
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
                        
                        <StatistikItem 
                            judul="Galon dipinjam" 
                            nilai={galonDipinjam} 
                            isEditing={isEditing} 
                            onChange={(e) => setGalonDipinjam(e.target.value)} 
                        />

                        <StatistikItem 
                            judul="Stok Galon" 
                            nilai={stokGalon} 
                            isEditing={isEditing} 
                            onChange={(e) => setStokGalon(e.target.value)} 
                        />

                        <StatistikItem 
                            judul="Galon Rusak" 
                            nilai={galonRusak} 
                            isEditing={isEditing} 
                            onChange={(e) => setGalonRusak(e.target.value)} 
                        />

                    </div>
                </div>
            </div>
        </main>
    );
}

export default StokGalon;