import PropTypes from "prop-types";
import { Form, useActionData } from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import { Fragment } from "react";

import Result from "../Result/Result";

function InputForm({ formData }) {
  const actionData = useActionData();
  return (
    <Fragment>
      <Form method="POST">
        <Fieldset fieldset={formData} />
      </Form>
      {actionData && actionData.error && <p>{actionData.error}</p>}
      {actionData && actionData.c10Rating && (
        <Result
          resultData={{
            parameterName: "Basic Dynamic Load Rating",
            alternativeParameterName: "Catalog load rating",
            parameterSymbol: "C",
            parameterSubSymbol: "10",
            value: actionData.c10Rating,
            unit: "kN",
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
