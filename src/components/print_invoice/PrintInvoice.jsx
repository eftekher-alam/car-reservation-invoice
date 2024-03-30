import { useContext, useEffect, useRef } from "react";
import { InvoiceContext } from "../../providers/InvoiceProvider";
import FormHeader from "../form_header/FormHeader";
import moment from "moment";


const PrintInvoice = () => {
    const { phone, email, firstName, lastName, setInvoiceRef, transitionID, returnDate, pickupDate, collisionCharge, liabilityInsurance, rentalTax, chargesOnHrs, selectedVehicle, msgHrsOrDay, msgHrsOrDayAmt, msgTxtAmt, msgTotalAmt, discount } = useContext(InvoiceContext);
    const ref = useRef();

    useEffect(() => {
        setInvoiceRef(ref);
    }, [ref, setInvoiceRef]);

    return (
        <div>
            <FormHeader headingText={"Invoice"}></FormHeader>
            <div ref={ref} className="p-10 text-sm">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-2">
                        {/* logo with user & company info  */}
                        <div className="w-full flex flex-col justify-center items-center gap-4">
                            <div><img src="/public/car-logo.png" alt="" className="w-32" /></div>
                            <div className="w-full">
                                <h1>RENTER INFO</h1>
                                <p className="font-bold capitalize ">{firstName + " " + lastName}</p>
                                <p>{email}</p>
                                <p>PH: {phone}</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <p>CH Car Place Inc</p>
                                <p>162 Bergen st</p>
                                <p>Brooklyn, NY 112113</p>
                                <p>PH#</p>
                            </div>
                            <div>
                                Monday 9:00 AM - 6:00 PM <br />
                                Tuesday 9:00 AM - 6:00 PM <br />
                                Wednesday 9:00 AM - 6:00 PM <br />
                                Thursday 9:00 AM - 6:00 PM <br />
                                Friday 9:00 AM - 6:00 PM <br />
                                Saturday 9:00 AM - 6:00 PM <br />
                                Sunday 9:00 AM - 6:00 PM <br />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold">Reservation</h1>
                            <h1 className="text-lg font-bold">{transitionID}</h1>
                            <p>REPAIR ORDER:</p>
                            <p>CLAIM:</p>
                            <p>Date/Time Out: {moment(new Date(pickupDate)).format("MM/DD/YYYY, h:mm a")}</p>
                            <p>Date/Time In: {moment(new Date(returnDate)).format("MM/DD/YYYY, h:mm a")}</p>
                        </div>
                        <div className="">
                            <div className="text-sm space-y-1 bg-slate-200">
                                <h1 className="text-lg font-bold">CHARGE SUMMARY</h1>
                                <div className="grid grid-cols-12 gap-1 font-semibold">
                                    <div className="col-span-6">Charge</div>
                                    <div className="col-span-2 text-center">Unit</div>
                                    <div className="col-span-2">Rate</div>
                                    <div className="col-span-2">Total</div>
                                </div>
                                {
                                    (chargesOnHrs > 0) && <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-6">{msgHrsOrDay}</div>
                                        <div className="col-span-2 text-center">1</div>
                                        <div className="col-span-2">${selectedVehicle[0]?.rates?.[msgHrsOrDay].toFixed(2)}</div>
                                        <div className="col-span-2">${msgHrsOrDayAmt.toFixed(2)}</div>
                                    </div>
                                }
                                {
                                    (collisionCharge === true && collisionCharge !== "initial") && <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-6">Collision Damage Waiver</div>
                                        <div className="col-span-2 text-center"></div>
                                        <div className="col-span-2">$9.00</div>
                                        <div className="col-span-2">$9.00</div>
                                    </div>
                                }
                                {
                                    (liabilityInsurance === true && liabilityInsurance !== "initial") && <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-6">Liability Insurance</div>
                                        <div className="col-span-2 text-center"></div>
                                        <div className="col-span-2">$15.00</div>
                                        <div className="col-span-2">$15.00</div>
                                    </div>
                                }
                                {
                                    (rentalTax === true && rentalTax !== "initial") && <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-6">Rental Tax</div>
                                        <div className="col-span-2 text-center"></div>
                                        <div className="col-span-2">11%</div>
                                        <div className="col-span-2">${(msgTxtAmt.toFixed(2))}</div>
                                    </div>
                                }
                                {
                                    (discount > 0) && <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-6">Discount</div>
                                        <div className="col-span-2 text-center"></div>
                                        <div className="col-span-2"></div>
                                        <div className="col-span-2">${(Number(discount).toFixed(2))}</div>
                                    </div>
                                }
                                <div className="grid grid-cols-12 gap-1 uppercase">
                                    <div className="col-span-10">total estimated charges</div>
                                    <div className="col-span-2">${msgTotalAmt.toFixed(2)}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintInvoice;