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
      in {unit}
    </legend>
  );
}

export default Legend;

Legend.propTypes = {
  legendData: PropTypes.instanceOf(Object).isRequired,
};
