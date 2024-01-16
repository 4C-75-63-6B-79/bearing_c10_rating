import PropTypes from "prop-types";
import { Form, useActionData } from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import { Fragment } from "react";

function InputForm({ formData }) {
  const actionData = useActionData();
  return (
    <Fragment>
      <Form method="POST">
        <Fieldset fieldset={formData} />
      </Form>
      {actionData && actionData.error && <p>{actionData.error}</p>}
      {actionData && actionData.c10Rating && <p>{actionData.c10Rating}</p>}
    </Fragment>
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
