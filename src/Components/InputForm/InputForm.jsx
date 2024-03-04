import PropTypes from "prop-types";
import { Form, useActionData } from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import { Fragment } from "react";

import Result from "../Result/Result";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function InputForm({ formData }) {
  const actionData = useActionData();
  return (
    <Fragment>
      <Form method="POST">
        <Fieldset fieldset={formData} />
      </Form>
      {actionData && actionData.error && (
        <ErrorMessage errorData={actionData.error} />
      )}
      {actionData && actionData.resultValue && (
        <Result
          resultData={{
            ...actionData,
          }}
        />
      )}
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
