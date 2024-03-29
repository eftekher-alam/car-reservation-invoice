import { createContext } from "react";
import PropTypes from 'prop-types';

export const InvoiceContext = createContext(null);

const InvoiceProvider = ({ children }) => {


    const invoiceInfo = {};

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