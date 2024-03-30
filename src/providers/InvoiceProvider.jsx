import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

export const InvoiceContext = createContext(null);

const InvoiceProvider = ({ children }) => {
    const [durationHr, setDurationHr] = useState(0);
    const [durationDay, setDurationDay] = useState(0);
    const [transitionID, setTransitionID] = useState("");
    const [userInfo, setUserInfo] = useState({});


    // charges
    const [collisionCharge, setCollisionCharge] = useState("initial");
    const [liabilityInsurance, setLiabilityInsurance] = useState("initial");
    const [additionalTotalCharge, setAdditionalTotalCharge] = useState(0.00);
    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const [totalCharges, setTotalCharges] = useState(0);

    const [discount, setDiscount] = useState(0);
    const [discountedCharge, setDiscountedCharge] = useState(0);


    const [rentalTax, setRentalTax] = useState(false);
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



    //Handle collision charge
    useEffect(() => {
        if (collisionCharge !== "initial" && collisionCharge === true)
            setAdditionalTotalCharge(prevTotal => prevTotal + 9);
        else if (collisionCharge !== "initial" && collisionCharge === false)
            setAdditionalTotalCharge(prevTotal => prevTotal - 9);
    }, [collisionCharge]);

    //Handle liability insurance charge
    useEffect(() => {
        if (liabilityInsurance !== "initial" && liabilityInsurance === true)
            setAdditionalTotalCharge(prevTotal => prevTotal + 15);
        else if (liabilityInsurance !== "initial" && liabilityInsurance === false)
            setAdditionalTotalCharge(prevTotal => prevTotal - 15);
    }, [liabilityInsurance]);

    // Handle discount 
    useEffect(() => {
        // console.log("execute in discount");
        if (discount > 0)
            setDiscountedCharge(additionalTotalCharge - discount);
        else
            setDiscountedCharge(additionalTotalCharge);
    }, [additionalTotalCharge, discount])


    /* =====================> Calculate Hour wise total <================================*/

    const [chargesOnHrs, setChargesOnHrs] = useState(0.00);
    const [hourlyTotal, setHourlyTotal] = useState(0.00);
    const [hourlyTotalTaxed, setHourlyTotalTaxed] = useState(0.00);
    const [hourlyTaxAmt, setHourlyTaxAmt] = useState(0.00);

    // Calculate hourly charge
    useEffect(() => {
        if (selectedVehicle.length > 0 && durationHr) {
            let charge = durationHr * selectedVehicle[0]?.rates?.hourly;
            setChargesOnHrs(charge);
        }
    }, [durationHr, selectedVehicle]);

    useEffect(() => {
        setHourlyTotal(chargesOnHrs + additionalTotalCharge);
    }, [additionalTotalCharge, chargesOnHrs]);


    useEffect(() => {
        console.log("Executing inside tax hourly");

        if (rentalTax === true) {
            setHourlyTotalTaxed(hourlyTotal * 1.11);
            setHourlyTaxAmt(hourlyTotal * .11)
        }
        if (rentalTax === false) {
            setHourlyTotalTaxed(hourlyTotal);
        }
    }, [rentalTax, hourlyTotal])


    /* =====================> Calculate Day wise total <================================*/

    const [chargesOnDay, setChargesOnDay] = useState(0.00);
    const [dailyTotal, setDailyTotal] = useState(0.00);
    const [dailyTotalTaxed, setDailyTotalTaxed] = useState(0.00);
    const [dailyTaxAmt, setDailyTaxAmt] = useState(0.00);

    // Calculate hourly charge
    useEffect(() => {
        if (selectedVehicle.length > 0 && durationDay) {
            let charge = durationDay * selectedVehicle[0]?.rates?.daily;
            setChargesOnDay(charge);
        }
    }, [durationDay, selectedVehicle]);

    useEffect(() => {
        setDailyTotal(chargesOnDay + additionalTotalCharge);
    }, [additionalTotalCharge, chargesOnDay]);


    useEffect(() => {
        // console.log("Executing inside tax hourly");

        if (rentalTax === true) {
            setDailyTotalTaxed(dailyTotal * 1.11);
            setDailyTaxAmt(dailyTotal * .11)
        }
        if (rentalTax === false) {
            setDailyTotalTaxed(dailyTotal);
        }
    }, [rentalTax, dailyTotal])

    console.log(hourlyTotalTaxed + "/Hourly  " + dailyTotalTaxed + "/daily", dailyTaxAmt);


    /* =====================> Taking the smallest amount among hourly and daily total <================================*/

    const [msgHrsOrDay, setMsgHrsOrDay] = useState("");
    const [msgHrsOrDayAmt, setMsgHrsOrDayAmt] = useState(0.00);
    const [msgTxtAmt, setMsgTxtAmt] = useState(0.00);
    const [msgTotalAmt, setMsgTotalAmt] = useState(0.00);

    useEffect(() => {
        //if hourly total grater than daily total, the smallest total among them will be shown.
        if (hourlyTotalTaxed > dailyTotalTaxed) {
            setMsgHrsOrDay("daily");
            setMsgHrsOrDayAmt(dailyTotal);
            setMsgTxtAmt(dailyTaxAmt);
            setMsgTotalAmt(dailyTotalTaxed);
        }
        else {
            setMsgHrsOrDay("hourly");
            setMsgHrsOrDayAmt(hourlyTotal);
            setMsgTxtAmt(hourlyTaxAmt);
            setMsgTotalAmt(hourlyTotalTaxed);
        }
    }, [durationHr, hourlyTotalTaxed, dailyTotalTaxed, hourlyTotal, hourlyTaxAmt, dailyTotal, dailyTaxAmt])

    const invoiceInfo = { data, setDurationHr, durationHr, setDiscount, transitionID, setUserInfo, collisionCharge, setCollisionCharge, liabilityInsurance, setLiabilityInsurance, rentalTax, setRentalTax, setSelectedVehicle, selectedVehicle, chargesOnHrs, totalCharges, rentalTaxAmt, totalChargesWithTax, discountedCharge, setDurationDay, msgHrsOrDay, msgHrsOrDayAmt, msgTxtAmt, msgTotalAmt };


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