import Navbar from "../nav_bar/Navbar";
import ReservationDetails from './../reservation_details/ReservationDetails';
import CustomerInfo from './../customer_info/CustomerInfo';
import ChargeSummary from './../charge_summary/ChargeSummary';
import VehicleInfo from './../vehicle_info/VehicleInfo';
import AdditionalCharges from './../additional_charges/AdditionalCharges';

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="mx-4 md:mx-12 lg:mx-4 xl:mx-0">
                <Navbar></Navbar>
                <div className="grid lg:grid-cols-3 lg:gap-4 xl:gap-8">
                    <div className="lg:col-span-2">
                        <div className="grid lg:grid-cols-2 lg:gap-4 xl:gap-8">
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
        </div>
    );
};

export default Home;