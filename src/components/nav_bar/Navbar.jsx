import { useContext } from "react";
import ReactToPrint from "react-to-print";
import { InvoiceContext } from "../../providers/InvoiceProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Navbar = () => {

    const { invoiceRef } = useContext(InvoiceContext);


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="text-2xl font-bold -ml-2" >Reservation</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    </ul>
                </div>
                <div className="navbar-end">

                    <div>
                        <ReactToPrint trigger={() => <a className="btn btn-primary">Print / Download</a>} content={() => invoiceRef.current} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;