import PropTypes from "prop-types";

function Legend({ legendData }) {
  const { text, symbol, symbolSub, unit } = legendData;
  return (
    <legend>
      {text} or {""}
      <i>
        {symbol}
        <sub>{symbolSub}</sub>
      </i>{" "}
      {unit && "in " + unit}
    </legend>
  );
}

export default Legend;

Legend.propTypes = {
  legendData: PropTypes.shape({
    text: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    symbolSub: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }),
};
