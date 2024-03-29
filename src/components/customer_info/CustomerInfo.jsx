import { useState } from "react";
import FormHeader from "../form_header/FormHeader";
import { useEffect } from "react";
import { useContext } from "react";
import { InvoiceContext } from './../../providers/InvoiceProvider';

const CustomerInfo = () => {
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { setUserInfo } = useContext(InvoiceContext);

    useEffect(() => {
        if (fname && lname && email && phone) {
            setUserInfo({
                fname,
                lname,
                email,
                phone
            })
        }
    }, [fname, lname, email, phone, setUserInfo]);

    const handlerfName = (e) => {
        setfName(e.target.value);
    }
    const handlerlName = (e) => {
        setlName(e.target.value);
    }
    const handlerEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlerPhone = (e) => {
        setPhone(e.target.value);
    }

    return (
        <div>
            <FormHeader headingText={"Customer Information"}></FormHeader>
            <div className="card glass">
                <div className="card-body">
                    <div className="space-y-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">First Name<span className="text-red-500">*</span></span>
                            </div>
                            <input onChange={handlerfName} type="text" className="input input-sm input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Last Name<span className="text-red-500">*</span></span>
                            </div>
                            <input onChange={handlerlName} type="text" className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email<span className="text-red-500">*</span></span>
                            </div>
                            <input onChange={handlerEmail} type="email" className="input input-sm  input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Phone<span className="text-red-500">*</span></span>
                            </div>
                            <input onChange={handlerPhone} type="text" className="input input-sm  input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerInfo;