import PropTypes from "prop-types";
import { Form } from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";

function InputForm({ formData }) {
  return (
    <Form>
      {console.log(formData)}
      <Fieldset fieldset={formData} />
    </Form>
  );
}

InputForm.propTypes = {
  formData: PropTypes.shape({
    legend: PropTypes.object.isRequired,
    inputs: PropTypes.array.isRequired,
    fieldsets: PropTypes.array,
    button: PropTypes.object.isRequired,
  }),
};

export default InputForm;
