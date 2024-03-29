import { useContext, useEffect, useState } from "react";
import FormHeader from "../form_header/FormHeader";
import { InvoiceContext } from "../../providers/InvoiceProvider";

const VehicleInfo = () => {

    const { data } = useContext(InvoiceContext);
    const [vehicleType, setVehicleType] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicles, setSelectedVehicles] = useState([]);
    // console.log(data);

    useEffect(() => {
        setVehicleType(Array.from(new Set(data?.map((item) => item?.type))));
    }, [data]);

    const handlarTypeWiseCars = (e) => {
        let selectedType = e.target.value;
        setVehicles(data.filter(car => car?.type.toString() === selectedType));
        document.getElementById("SelectVehicleID").value = "Select Vehicle";
        setSelectedVehicles([]);
    }

    const handlarSelectedVehicle = (e) => {
        let selectedVehicleID = e.target.value;
        setSelectedVehicles(data.filter(data => data.id.toString() === selectedVehicleID.toString()));
    }

    console.log(selectedVehicles, "olk");

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
                            <select onChange={handlarTypeWiseCars} defaultValue={"Select Type"} required className="select select-sm select-bordered">
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
                            <select onChange={handlarSelectedVehicle} defaultValue={"Select Vehicle"} id="SelectVehicleID" required className="select select-sm select-bordered">
                                <option disabled value={"Select Vehicle"}>Select Vehicle</option>
                                {
                                    vehicles?.map((vehicle, index) => <option key={index} value={vehicle?.id} >{vehicle?.id}</option>)
                                }
                            </select>
                        </label>
                    </div>

                    {/* Selected Vehicle Details */}
                    {
                        (selectedVehicles.length > 0) && <div className="space-y-2 text-sm py-3">
                            <div>
                                <img src={selectedVehicles[0].imageURL} alt="" />
                            </div>
                            <div className="font-semibold relative after:w-full after:h-[1px] after:bg-[#5D5CFF] after:absolute after:-bottom-1 after:left-0">
                                {`${selectedVehicles[0]?.model} -  ${selectedVehicles[0]?.year} | ${selectedVehicles[0]?.make}`}
                            </div>
                            <div>Seats : {selectedVehicles[0]?.seats}</div>
                            <div>Bags : {selectedVehicles[0]?.bags}</div>
                            <h2>Features : </h2>
                            <div className="pl-4">
                                {
                                    selectedVehicles[0]?.features.map((feature, index) => <li key={index}>{feature}</li>)
                                }
                            </div>
                            <div>Pricing : </div>
                            <div className="flex justify-between">
                                <div>${selectedVehicles[0]?.rates?.hourly}/hour</div>
                                <div>${selectedVehicles[0]?.rates?.daily}/daily</div>
                                <div>${selectedVehicles[0]?.rates?.weekly}/weekly</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default VehicleInfo;