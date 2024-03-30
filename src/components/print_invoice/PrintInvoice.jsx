import { useContext, useEffect, useRef } from "react";
import { InvoiceContext } from "../../providers/InvoiceProvider";
import FormHeader from "../form_header/FormHeader";
import moment from "moment";



const PrintInvoice = () => {
    const { phone, email, firstName, lastName, setInvoiceRef, transitionID, returnDate, pickupDate, collisionCharge, liabilityInsurance, rentalTax, chargesOnHrs, selectedVehicle, msgHrsOrDay, msgHrsOrDayAmt, msgTxtAmt, msgTotalAmt, discount, setErrorMsg } = useContext(InvoiceContext);
    const ref = useRef();

    useEffect(() => {
        setInvoiceRef(ref);
        if (!phone || !email || !firstName || !lastName || !returnDate || !pickupDate)
            setErrorMsg(true);
    }, [ref, setInvoiceRef, phone, email, firstName, lastName, returnDate, pickupDate, setErrorMsg]);

    return (
        <div>
            <FormHeader headingText={"Invoice"}></FormHeader>
            <div ref={ref} className="p-10 text-sm">
                <div className="grid grid-cols-2 gap-2">
                    {/* right div` */}
                    <div>
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
                        <div className="">
                            <h1 className="text-lg font-bold my-3">ADDITIONAL AUTHORIZED DRIVER(S)</h1>
                            <h1 className="text-base font-bold">UNIT DETAILS</h1>
                            <p>Unit : </p>
                            <p>Make & Model : </p>

                            <div className="py-5">
                                <p>BILL TO :</p>
                                <p>Payment Type : Unpaid</p>
                                <p>AUTH : $0.00</p>
                            </div>

                            <div>
                                <p>Referral:</p>
                                <p>NOTICE: Collision Insurance (CDW) - $7 per day</p>
                                <p>Limits liability of damages to one's own vehicle up to $1000 in event of an accident, by waiving this coverage renter agrees to be hold liable for damages up to the entire value of the vehicle</p>
                            </div>
                            <div className="grid grid-cols-2 my-5 text-center">
                                <p>Accept</p>
                                <p>Reject</p>
                            </div>
                            <p>Rental service may be refused anyone when done in the best interest of the renting company or customer - Rates do not include gasoline. -Reserves the right to collect deposit covering estimated rental charges.</p>
                        </div>
                    </div>
                    {/* left div */}
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold">Reservation</h1>
                            <h1 className="text-lg font-bold">{transitionID}</h1>
                            <p>REPAIR ORDER:</p>
                            <p>CLAIM:</p>
                            <p>Date/Time Out: {moment(new Date(pickupDate)).format("MM/DD/YYYY, h:mm a")}</p>
                            <p>Date/Time In: {moment(new Date(returnDate)).format("MM/DD/YYYY, h:mm a")}</p>
                        </div>
                        {/* summary */}
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
                        <div className="my-5">
                            <p>Your rental agreement offers, for an additional charge, an optional waiver to cover all or a part of your responsibility for damage to or loss of the vehicle: Before deciding whether to purchase the walver, you may wish to determine whether you own automobile incsurance or credit card agreement provides to coverage for rental vehicle damage or loss and determine the amount of the deductible under your own insurance coverage. The purchase of the waiver is ot mandator. The waiver is not Insurance. I acknowledge that I have received and read a copy of this</p>
                        </div>
                        <p>Renters Signature</p>
                        -------------------------------------------

                        <p className="mt-10">Additional Driver 1</p>
                        -------------------------------------------
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintInvoice;