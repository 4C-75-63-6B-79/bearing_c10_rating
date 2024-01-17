import PropTypes from "prop-types";

function Button({ buttonData }) {
  const buttonAttributes = {
    ...(buttonData["buttonType"] !== "" && { type: buttonData["buttonType"] }),
    ...(buttonData["buttonOnClick"] !== "" && {
      onClick: buttonData["buttonOnClick"],
    }),
  };
  return (
    <div className="button">
      <br></br>
      <button {...buttonAttributes}>
        {buttonData["buttonText"]}
        {buttonData["buttonSymbol"] !== "" && " " + buttonData["buttonSymbol"]}
        {buttonData["buttonSymbolSub"] !== "" && " "}
        {buttonData["buttonSymbolSub"] !== "" && (
          <sub>{buttonData["buttonSymbolSub"]}</sub>
        )}
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
    buttonOnClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }),
};
