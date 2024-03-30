import { useContext } from "react";
import FormHeader from "../form_header/FormHeader";
import { InvoiceContext } from "../../providers/InvoiceProvider";

const ChargeSummary = () => {
    const { collisionCharge, liabilityInsurance, rentalTax, chargesOnHrs, selectedVehicle, discountedCharge, rentalTaxAmt, totalChargesWithTax } = useContext(InvoiceContext);
    return (
        <div>
            <FormHeader headingText={"Charges Summary"}></FormHeader>
            <div className="card glass bg-[#DFDFFF]">
                <div className="card-body text-sm p-4 space-y-4 border border-[#5D5CFF] rounded-lg       ">
                    <div className="grid grid-cols-12 gap-1 font-semibold relative after:w-full after:h-[1px] after:bg-[#5D5CFF] after:absolute after:-bottom-1 after:left-0">
                        <div className="col-span-5 xl:col-span-6">Charge</div>
                        <div className="col-span-1 xl:col-span-2 text-center">Unit</div>
                        <div className="col-span-3 xl:col-span-2">Rate</div>
                        <div className="col-span-3 xl:col-span-2">Total</div>
                    </div>
                    {
                        (chargesOnHrs > 0) && <div className="grid grid-cols-12 gap-1">
                            <div className=" col-span-5 xl:col-span-6">Hourly</div>
                            <div className="col-span-1 xl:col-span-2 text-center">1</div>
                            <div className="col-span-3 xl:col-span-2">${selectedVehicle[0]?.rates?.hourly.toFixed(2)}</div>
                            <div className="col-span-3 xl:col-span-2">${chargesOnHrs.toFixed(2)}</div>
                        </div>
                    }
                    {
                        (collisionCharge === true && collisionCharge !== "initial") && <div className="grid grid-cols-12 gap-1">
                            <div className=" col-span-5 xl:col-span-6">Collision Damage Waiver</div>
                            <div className="col-span-1 xl:col-span-2 text-center"></div>
                            <div className="col-span-3 xl:col-span-2">$9.00</div>
                            <div className="col-span-3 xl:col-span-2">$9.00</div>
                        </div>
                    }
                    {
                        (liabilityInsurance === true && liabilityInsurance !== "initial") && <div className="grid grid-cols-12 gap-1">
                            <div className=" col-span-5 xl:col-span-6">Liability Insurance</div>
                            <div className="col-span-1 xl:col-span-2 text-center"></div>
                            <div className="col-span-3 xl:col-span-2">$15.00</div>
                            <div className="col-span-3 xl:col-span-2">$15.00</div>
                        </div>
                    }
                    {
                        (rentalTax === true && rentalTax !== "initial") && <div className="grid grid-cols-12 gap-1">
                            <div className=" col-span-5 xl:col-span-6">Rental Tax</div>
                            <div className="col-span-1 xl:col-span-2 text-center"></div>
                            <div className="col-span-3 xl:col-span-2">11%</div>
                            <div className="col-span-3 xl:col-span-2">${(rentalTaxAmt.toFixed(2))}</div>
                        </div>
                    }
                    <div className="grid grid-cols-12 gap-1 font-semibold">
                        <div className="col-span-9 xl:col-span-10">Total</div>
                        <div className="col-span-3 xl:col-span-2">${totalChargesWithTax.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChargeSummary;