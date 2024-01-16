import PropTypes from "prop-types";

function Button({ buttonData }) {
  return (
    <div className="button">
      <br></br>
      <button type={buttonData["buttonType"]}>
        {buttonData["buttonText"] + " " + buttonData["buttonSymbol"]}{" "}
        <sub>{buttonData["buttonSymbolSub"]}</sub>
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  buttonData: PropTypes.shape({
    buttonType: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonSymbol: PropTypes.string.isRequired,
    buttonSymbolSub: PropTypes.string.isRequired,
  }),
};
