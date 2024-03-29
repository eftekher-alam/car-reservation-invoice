
const CustomerInfo = () => {
    return (
        <div>
            <div className={`font-bold lg:text-lg relative after:w-full after:h-[1px] after:bg-[#5D5CFF] after:absolute after:-bottom-1 after:left-0`}>Customer Information</div>
            <div className="card glass mt-6">
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