import PropTypes from "prop-types";

function Result({ resultData }) {
  return (
    <div className="result">
      <p>
        <b>{resultData["parameterName"]}</b>
        {resultData["alternativeParameterName"] && " or "}
        {resultData["alternativeParameterName"] && (
          <b>{resultData["alternativeParameterName"]}</b>
        )}
        {resultData["parameterSymbol"] && " ("}
        {resultData["parameterSymbol"] && (
          <i>{resultData["parameterSymbol"]}</i>
        )}
        {resultData["parameterSubSymbol"] && (
          <i>
            <sub>{resultData["parameterSubSymbol"]}</sub>
          </i>
        )}
        {resultData["parameterSymbol"] && ")"} is{" "}
        <b>
          <i>{resultData["resultValue"]}</i>
        </b>
        {resultData["unit"] && " "}
        {resultData["unit"] && (
          <b>
            <i>{resultData["unit"]}</i>
          </b>
        )}
      </p>
    </div>
  );
}

export default Result;

Result.propTypes = {
  resultData: PropTypes.shape({
    parameterName: PropTypes.string.isRequired,
    alternativeParameterName: PropTypes.string.isRequired,
    parameterSymbol: PropTypes.string.isRequired,
    parameterSubSymbol: PropTypes.string.isRequired,
    resultValue: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  }),
};
