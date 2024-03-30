import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

export const InvoiceContext = createContext(null);

const InvoiceProvider = ({ children }) => {
    const [durationHr, setDurationHr] = useState(0);
    const [transitionID, setTransitionID] = useState("");
    const [userInfo, setUserInfo] = useState({});


    // charges
    const [collisionCharge, setCollisionCharge] = useState("initial");
    const [liabilityInsurance, setLiabilityInsurance] = useState("initial");
    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const [chargesOnHrs, setChargesOnHrs] = useState(0.00);
    const [totalCharges, setTotalCharges] = useState(0);

    const [discount, setDiscount] = useState(0);
    const [discountedCharge, setDiscountedCharge] = useState(0);


    const [rentalTax, setRentalTax] = useState("initial");
    const [rentalTaxAmt, setRentalTaxAmt] = useState(0);
    const [totalChargesWithTax, setTotalChargesWithTax] = useState(0);




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
        let transId = "RA" + new Date().getTime().toString() + Math.floor(Math.random() * 100).toString();
        setTransitionID(transId);
    }, []);

    // Calculate hourly charge
    useEffect(() => {
        if (selectedVehicle.length > 0 && durationHr) {
            let charge = durationHr * selectedVehicle[0]?.rates?.hourly;
            setChargesOnHrs(charge);
            setTotalCharges(prevTotal => prevTotal + charge);
        }
    }, [durationHr, selectedVehicle]);


    //Handle collision charge
    useEffect(() => {
        if (collisionCharge !== "initial" && collisionCharge === true)
            setTotalCharges(prevTotal => prevTotal + 9);
        else if (collisionCharge !== "initial" && collisionCharge === false)
            setTotalCharges(prevTotal => prevTotal - 9);
    }, [collisionCharge]);

    //Handle liability insurance charge
    useEffect(() => {
        if (liabilityInsurance !== "initial" && liabilityInsurance === true)
            setTotalCharges(prevTotal => prevTotal + 15);
        else if (liabilityInsurance !== "initial" && liabilityInsurance === false)
            setTotalCharges(prevTotal => prevTotal - 15);
    }, [liabilityInsurance]);

    // Handle discount 
    useEffect(() => {
        if (discount > 0)
            setDiscountedCharge(totalCharges - discount);
        else
            setDiscountedCharge(totalCharges);
    }, [totalCharges, discount])

    //Handle Tax
    useEffect(() => {
        if (rentalTax !== "initial" && rentalTax === true) {
            setTotalChargesWithTax(discountedCharge * 1.11);
            setRentalTaxAmt(discountedCharge * .11)
        }
        if (rentalTax !== "initial" && rentalTax === false) {
            setTotalChargesWithTax(discountedCharge);
        }
    }, [discountedCharge, rentalTax])


    const invoiceInfo = { data, setDurationHr, durationHr, setDiscount, transitionID, setUserInfo, collisionCharge, setCollisionCharge, liabilityInsurance, setLiabilityInsurance, rentalTax, setRentalTax, setSelectedVehicle, selectedVehicle, chargesOnHrs, totalCharges, rentalTaxAmt, totalChargesWithTax };


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