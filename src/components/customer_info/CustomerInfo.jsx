import FormHeader from "../form_header/FormHeader";

const CustomerInfo = () => {
    return (
        <div>
            <FormHeader headingText={"Customer Information"}></FormHeader>
            <div className="card glass">
                <div className="card-body">
                    <form className="space-y-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">First Name<span className="text-red-500">*</span></span>
                            </div>
                            <input type="text" className="input input-sm input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Last Name<span className="text-red-500">*</span></span>
                            </div>
                            <input type="text" className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email<span className="text-red-500">*</span></span>
                            </div>
                            <input type="text" className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Phone<span className="text-red-500">*</span></span>
                            </div>
                            <input type="text" className="input input-sm  input-bordered w-full" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerInfo;