import React from 'react';

const StatistikItem = ({ judul, nilai, isEditing, onChange, textColor = "text-dark" }) => {
    return (
        <div className="col-md-4 mb-3 mb-md-0">
            <h4 className="fw-bold text-dark mb-2">{judul}</h4>
            {isEditing ? (
                <input 
                    type="number" 
                    className={`form-control text-center mx-auto fs-4 fw-bold ${textColor}`} 
                    style={{ maxWidth: '120px' }}
                    value={nilai} 
                    onChange={onChange} 
                />
            ) : (
                <h2 className={`fw-bold m-0 ${textColor}`}>{nilai}</h2>
            )}
        </div>
    );
};

export default StatistikItem;