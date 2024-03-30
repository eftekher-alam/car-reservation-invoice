import { useContext } from "react";
import FormHeader from "../form_header/FormHeader";
import { InvoiceContext } from "../../providers/InvoiceProvider";

const AdditionalCharges = () => {

    const { setCollisionCharge, setLiabilityInsurance, setRentalTax } = useContext(InvoiceContext);

    function handlerCollisionDamage(e) {
        setCollisionCharge(e.target.checked);
    }
    function handlerLiabilityInsurance(e) {
        setLiabilityInsurance(e.target.checked);
    }
    function handlerRentalTax(e) {
        setRentalTax(e.target.checked);
    }

    return (
        <div>
            <FormHeader headingText={"Additional Charges"}></FormHeader>
            <div className="card glass">
                <div className="card-body">
                    <div className="space-y-2">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <div className="flex gap-2">
                                    <input type="checkbox" onChange={handlerCollisionDamage} className="checkbox checkbox-sm" />
                                    <span className="label-text">Collision Damage Waiver</span>
                                </div>
                                <span className="label-text">$9.00</span>
                            </label>
                            <label className="label cursor-pointer">
                                <div className="flex gap-2">
                                    <input type="checkbox" onChange={handlerLiabilityInsurance} className="checkbox checkbox-sm" />
                                    <span className="label-text">Liability Insurance</span>
                                </div>
                                <span className="label-text">$15.00</span>
                            </label>
                            <label className="label cursor-pointer">
                                <div className="flex gap-2">
                                    <input type="checkbox" onChange={handlerRentalTax} className="checkbox checkbox-sm" />
                                    <span className="label-text">Rental Tax</span>
                                </div>
                                <span className="label-text">11.5%</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalCharges;