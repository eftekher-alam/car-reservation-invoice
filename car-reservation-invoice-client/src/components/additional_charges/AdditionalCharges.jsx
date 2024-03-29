import FormHeader from "../form_header/FormHeader";

const AdditionalCharges = () => {
    return (
        <div>
            <FormHeader headingText={"Additional Charges"}></FormHeader>
            <div className="card glass">
                <div className="card-body">
                    <form className="space-y-2">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <div className="flex gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                    <span className="label-text">Collision Damage Waiver</span>
                                </div>
                                <span className="label-text">$ 9.00</span>
                            </label>
                            <label className="label cursor-pointer">
                                <div className="flex gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                    <span className="label-text">Liability Insurance</span>
                                </div>
                                <span className="label-text">$ 15.00</span>
                            </label>
                            <label className="label cursor-pointer">
                                <div className="flex gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                    <span className="label-text">Rental Tax</span>
                                </div>
                                <span className="label-text">11.5%</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdditionalCharges;