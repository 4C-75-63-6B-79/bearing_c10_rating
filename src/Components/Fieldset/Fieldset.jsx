import PropTypes from "prop-types";

import Legend from "../Legend/Legend";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Fieldset({ fieldset }) {
  const { legend, inputs, fieldsets, button } = fieldset;
  return (
    <fieldset>
      <Legend legendData={legend} />
      {inputs.map((input) => (
        <Input key={input.labelFor + input.labelText} inputData={input} />
      ))}
      {fieldsets &&
        fieldsets.map((fieldset) => (
          <Fieldset key={fieldset["legend"]["text"]} fieldset={fieldset} />
        ))}
      {button && <Button buttonData={button} />}
    </fieldset>
  );
}

export default Fieldset;

Fieldset.propTypes = {
  fieldset: PropTypes.shape({
    legend: PropTypes.object.isRequired,
    inputs: PropTypes.array.isRequired,
    fieldsets: PropTypes.array,
    button: PropTypes.object,
  }),
};
