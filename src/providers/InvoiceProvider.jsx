import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const InvoiceContext = createContext(null);

const InvoiceProvider = ({ children }) => {
    const [durationHr, setDurationHr] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [transitionID, setTransitionID] = useState("");


    //Fetch data from API
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://exam-server-7c41747804bf.herokuapp.com/carsList")
            .then(res => res.json())
            .then(data => setData(data.data));
    }, []);

    // Generate Transition ID
    useEffect(() => {
        // transID = Current time + Random Number
        let transId = "TRA" + new Date().getTime().toString() + Math.floor(Math.random() * 100).toString();
        setTransitionID(transId);
    }, []);

    console.log(transitionID, "from context");

    const invoiceInfo = { data, setDurationHr, durationHr, setDiscount, transitionID };

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