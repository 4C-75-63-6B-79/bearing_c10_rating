import PropTypes from "prop-types";
import { Fragment } from "react";

function ErrorMessage({ errorData }) {
  return (
    <Fragment>
      <p>{errorData.message}</p>
    </Fragment>
  );
}

ErrorMessage.propTypes = {
  errorData: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};

export default ErrorMessage;
