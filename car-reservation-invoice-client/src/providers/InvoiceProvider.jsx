import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const InvoiceContext = createContext(null);

const InvoiceProvider = ({ children }) => {

    //Fetch data from API
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://exam-server-7c41747804bf.herokuapp.com/carsList")
            .then(res => res.json())
            .then(data => setData(data.data));
    }, []);

    const invoiceInfo = { data };

    return (
        <InvoiceContext.Provider value={invoiceInfo}>
            {/* Page content */}
            {children}
        </InvoiceContext.Provider>
    );
};

InvoiceProvider.propTypes = {
    children: PropTypes.node
}
export default InvoiceProvider;