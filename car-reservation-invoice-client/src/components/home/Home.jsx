import Navbar from "../nav_bar/Navbar";
import ReservationDetails from './../reservation_details/ReservationDetails';
import CustomerInfo from './../customer_info/CustomerInfo';
import ChargeSummary from './../charge_summary/ChargeSummary';
import VehicleInfo from './../vehicle_info/VehicleInfo';
import AdditionalCharges from './../additional_charges/AdditionalCharges';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="grid grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-2">
                        <div>
                            <ReservationDetails></ReservationDetails>
                            <VehicleInfo></VehicleInfo>
                        </div>
                        <div>
                            <CustomerInfo></CustomerInfo>
                            <AdditionalCharges></AdditionalCharges>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <ChargeSummary></ChargeSummary>
                </div>
            </div>
        </div>
    );
};

export default Home;