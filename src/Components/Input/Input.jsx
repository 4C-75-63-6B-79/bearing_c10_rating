import { Fragment } from "react";
import PropTypes from "prop-types";

function Input({ inputData }) {
  const inputAttributes = {
    ...(inputData["inputType"] !== "" && { type: inputData["inputType"] }),
    ...(inputData["inputName"] !== "" && { name: inputData["inputName"] }),
    ...(inputData["inputId"] !== "" && { id: inputData["inputId"] }),
    ...(inputData["inputPattern"] !== "" && {
      pattern: inputData["inputPattern"],
    }),
    ...(inputData["inputSize"] !== "" && { size: inputData["inputSize"] }),
    ...(inputData["inputValue"] !== "" && { value: inputData["inputValue"] }),
    ...(inputData["inputPlaceholder"] !== "" && {
      placeholder: inputData["inputPlaceholder"],
    }),
    ...(inputData["inputRequired"] !== "" && {
      required: inputData["inputRequired"],
    }),
    ...(inputData["defaultChecked"] !== "" && {
      defaultChecked: inputData["defaultChecked"],
    }),
  };
  return (
    <Fragment>
      {
        <div className="inputs">
          {inputData["inputType"] === "radio" ? (
            <>
              <input {...inputAttributes}></input>
              <label htmlFor={inputData["labelFor"]}>
                {inputData["labelText"]} <i>{inputData["labelUnit"]}</i>{" "}
                {inputData["labelSymbol"]}
                <sub>{inputData["labelSymbolSub"]}</sub>
                &emsp;
              </label>
            </>
          ) : (
            <>
              <label htmlFor={inputData["labelFor"]}>
                {inputData["labelText"]} <i>{inputData["labelUnit"]}</i>{" "}
                {inputData["labelSymbol"]}
                <sub>{inputData["labelSymbolSub"]}</sub>
                &emsp;
              </label>
              <input {...inputAttributes}></input>
            </>
          )}
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
    inputValue: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
    inputRequired: PropTypes.oneOf([true, false, ""]),
    defaultChecked: PropTypes.oneOf([true, false, ""]),
  }),
};
