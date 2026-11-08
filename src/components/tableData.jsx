function TableData({ headers, children }) {
    return (
        <div className="table-responsive border">
            <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                    <tr>
                        {headers.map((head, index) => (
                            <th key={index} scope="col" className="py-3 px-3">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export default TableData;