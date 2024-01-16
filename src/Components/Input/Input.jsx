import { Fragment } from "react";
import PropTypes from "prop-types";

function Input({ inputData }) {
  return (
    <Fragment>
      {
        <div className="inputs">
          <label htmlFor={inputData["labelFor"]}>
            {inputData["labelText"]} <i>{inputData["labelUnit"]}</i>{" "}
            {inputData["labelSymbol"]}
            <sub>{inputData["labelSymbolSub"]}</sub>
            &emsp;
          </label>
          <input
            type={inputData["inputType"]}
            name={inputData["inputName"]}
            id={inputData["inputId"]}
            pattern={inputData["inputPattern"] ?? inputData["inputPattern"]}
            size={inputData["inputSize"] ?? inputData["inputSize"]}
            placeholder={
              inputData["inputPlaceholder"] ?? inputData["inputPlaceholder"]
            }
            required={
              inputData["inputRequired"] !== null && inputData["inputRequired"]
            }
            defaultChecked={
              inputData["defaultChecked"] !== null &&
              inputData["defaultChecked"]
            }
          ></input>
        </div>
      }
    </Fragment>
  );
}

export default Input;

Input.propTypes = {
  inputData: PropTypes.shape({
    legend: PropTypes.object,
    labelFor: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    labelUnit: PropTypes.string.isRequired,
    labelSymbol: PropTypes.string.isRequired,
    labelSymbolSub: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    inputPattern: PropTypes.string.isRequired,
    inputSize: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
    inputRequired: PropTypes.oneOf([true, false, null]),
    defaultChecked: PropTypes.oneOf([true, false, null]),
  }),
};
