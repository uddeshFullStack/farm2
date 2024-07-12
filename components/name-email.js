import PropTypes from "prop-types";

const NameEmail = ({ className = "", namePlaceholder }) => {
  return (
    <div
      className={`self-stretch h-[87px] flex flex-col items-start justify-start gap-[14px] max-w-full text-left text-7xl text-lite font-inter ${className}`}
    >
      <input
        className="w-[71px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-[25px] relative text-left inline-block p-0 mq450:text-base"
        placeholder={namePlaceholder}
        type="text"
      />
      <div className="self-stretch flex-1 shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-start justify-start max-w-full">
        <div className="self-stretch flex-1 relative rounded-10xs bg-white box-border max-w-full border-[0.5px] border-solid border-silver" />
        <div className="h-0 w-[72px] relative hidden mq450:text-2xl">Name</div>
      </div>
    </div>
  );
};

NameEmail.propTypes = {
  className: PropTypes.string,
  namePlaceholder: PropTypes.string,
};

export default NameEmail;
