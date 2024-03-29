import { useContext, useState } from "react";
import FormHeader from "../form_header/FormHeader";
import { useEffect } from "react";
import { InvoiceContext } from "../../providers/InvoiceProvider";

const ReservationDetails = () => {
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [duration, setDuration] = useState("");
    const { setDurationHr, setDiscount, transitionID } = useContext(InvoiceContext);

    useEffect(() => {
        if (pickupDate && returnDate) {
            var timeDifference = new Date(returnDate).getTime() - new Date(pickupDate).getTime();
            var hourDifference = timeDifference / (1000 * 60 * 60);

            // Calculate total minutes
            var totalMinutes = hourDifference * 60;

            // Calculate weeks
            var weeks = Math.floor(totalMinutes / (7 * 24 * 60));

            // Calculate remaining minutes after considering weeks
            var remainingMinutes = totalMinutes % (7 * 24 * 60);

            // Calculate days
            var days = Math.floor(remainingMinutes / (24 * 60));

            // Calculate remaining minutes after considering days
            remainingMinutes %= (24 * 60);

            // Calculate hours
            var hours = Math.floor(remainingMinutes / 60);

            // Calculate remaining minutes
            var minutes = remainingMinutes % 60;

            let durationMsg = [];
            if (weeks)
                durationMsg.push(` ${weeks} week`);
            if (days)
                durationMsg.push(` ${days} day`);
            if (hours)
                durationMsg.push(` ${hours} hrs`);
            if (minutes)
                durationMsg.push(` ${minutes} min`);

            setDuration(durationMsg);
            setDurationHr(hourDifference);

        }
    }, [pickupDate, returnDate, setDurationHr]);

    const handlerPickupDate = (e) => {
        setPickupDate(e.target.value);
    }

    const handlerReturnDate = (e) => {
        setReturnDate(e.target.value);
    }

    const handlerDiscount = (e) => {
        setDiscount(e.target.value);
    }


    return (
        <div>
            <FormHeader headingText={"Reservation Details"}></FormHeader>
            <div className="card glass">
                <div className="card-body">
                    <div className="space-y-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Reservation ID</span>
                            </div>
                            <input type="text" value={transitionID} className="input input-sm input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Pickup Date<span className="text-red-500">*</span></span>
                            </div>
                            <input onChange={handlerPickupDate} type="datetime-local" className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Return Date<span className="text-red-500">*</span></span>
                            </div>
                            <input onChange={handlerReturnDate} type="datetime-local" className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full pt-4">
                            <div className="label pr-0">
                                <span className="label-text">Duration</span>
                                <input type="text" value={duration} readOnly className="input input-sm  input-bordered w-3/4" />
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Discount</span>
                            </div>
                            <input onChange={handlerDiscount} type="number" className="input input-sm  input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationDetails;