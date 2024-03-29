import FormHeader from "../form_header/FormHeader";

const ReservationDetails = () => {

    return (
        <div>
            <FormHeader headingText={"Reservation Details"}></FormHeader>
            <div className="card glass">
                <div className="card-body">
                    <form className="space-y-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Reservation ID</span>
                            </div>
                            <input type="text" className="input input-sm input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Pickup Date<span className="text-red-500">*</span></span>
                            </div>
                            <input type="date" className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Return Date<span className="text-red-500">*</span></span>
                            </div>
                            <input type="date"  className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full pt-4">
                            <div className="label pr-0">
                                <span className="label-text">Duration</span>
                                <input type="text" className="input input-sm  input-bordered w-3/4" />
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Discount</span>
                            </div>
                            <input type="text" className="input input-sm  input-bordered w-full" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReservationDetails;