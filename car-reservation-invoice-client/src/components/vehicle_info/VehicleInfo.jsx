import FormHeader from "../form_header/FormHeader";

const VehicleInfo = () => {
    return (
        <div>
            <FormHeader headingText={"Vehicle Information"}></FormHeader>
            <div className="card glass">
                <div className="card-body">
                    <form className="space-y-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Vehicle Type<span className="text-red-500">*</span></span>
                            </div>
                            <select className="select select-sm select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Vehicle<span className="text-red-500">*</span></span>
                            </div>
                            <select className="select select-sm select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VehicleInfo;