import { useContext, useEffect, useState } from "react";
import FormHeader from "../form_header/FormHeader";
import { InvoiceContext } from "../../providers/InvoiceProvider";

const VehicleInfo = () => {

    const { data, setSelectedVehicle, selectedVehicle } = useContext(InvoiceContext);
    const [vehicleType, setVehicleType] = useState([]);
    const [vehicles, setVehicles] = useState([]);


    useEffect(() => {
        setVehicleType(Array.from(new Set(data?.map((item) => item?.type))));
    }, [data]);

    const handlerTypeWiseCars = (e) => {
        let selectedType = e.target.value;
        setVehicles(data.filter(car => car?.type.toString() === selectedType));

        // After select a type of vehicle clear the previous selection
        document.getElementById("SelectVehicleID").value = "Select Vehicle";
        setSelectedVehicle([]);
    }

    const handlerSelectedVehicle = (e) => {
        let selectedVehicleID = e.target.value;
        setSelectedVehicle(data.filter(data => data.id.toString() === selectedVehicleID.toString()));
    }

    return (
        <div>
            <FormHeader headingText={"Vehicle Information"}></FormHeader>
            <div className="card glass">
                <div className="card-body">

                    {/* Select Vehicle */}
                    <div className="space-y-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Vehicle Type<span className="text-red-500">*</span></span>
                            </div>
                            <select onChange={handlerTypeWiseCars} defaultValue={"Select Type"} required className="select select-sm select-bordered">
                                <option disabled value={"Select Type"}>Select Type</option>
                                {
                                    vehicleType?.map((type, index) => <option key={index} value={type} >{type}</option>)
                                }
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Vehicle<span className="text-red-500">*</span></span>
                            </div>
                            <select onChange={handlerSelectedVehicle} defaultValue={"Select Vehicle"} id="SelectVehicleID" required className="select select-sm select-bordered">
                                <option disabled value={"Select Vehicle"}>Select Vehicle</option>
                                {
                                    vehicles?.map((vehicle, index) => <option key={index} value={vehicle?.id} >{`${vehicle?.id} | ${vehicle?.model} -  ${vehicle?.year}`}</option>)
                                }
                            </select>
                        </label>
                    </div>

                    {/* Selected Vehicle Details */}
                    {
                        (selectedVehicle.length > 0) && <div className="space-y-2 text-sm py-3">
                            <div>
                                <img src={selectedVehicle[0].imageURL} alt="" />
                            </div>
                            <div className="font-semibold relative after:w-full after:h-[1px] after:bg-[#5D5CFF] after:absolute after:-bottom-1 after:left-0">
                                {`${selectedVehicle[0]?.model} -  ${selectedVehicle[0]?.year} | ${selectedVehicle[0]?.make}`}
                            </div>
                            <div>Seats : {selectedVehicle[0]?.seats}</div>
                            <div>Bags : {selectedVehicle[0]?.bags}</div>
                            <div>
                                <h2>Features : </h2>
                                <div className="pl-4">
                                    {
                                        selectedVehicle[0]?.features.map((feature, index) => <li key={index}>{feature}</li>)
                                    }
                                </div>
                            </div>
                            <div>
                                <div>Pricing : </div>
                                <div className="flex justify-between">
                                    <div>${selectedVehicle[0]?.rates?.hourly}/hour</div>
                                    <div>${selectedVehicle[0]?.rates?.daily}/daily</div>
                                    <div>${selectedVehicle[0]?.rates?.weekly}/weekly</div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default VehicleInfo;