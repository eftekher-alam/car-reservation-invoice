const Navbar = () => {

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
                    <a className="btn btn-primary">Print / Download</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;