import PropTypes from 'prop-types';

const FormHeader = ({ headingText }) => {
    return (
        <div className={`font-bold  my-7 lg:text-lg relative after:w-full after:h-[1px] after:bg-[#5D5CFF] after:absolute after:-bottom-1 after:left-0`}>{headingText}</div>
    );
};

FormHeader.propTypes = {
    headingText: PropTypes.string
}

export default FormHeader;