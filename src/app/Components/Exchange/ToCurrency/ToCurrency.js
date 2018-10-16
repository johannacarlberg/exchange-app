import React from 'react';
import PropTypes from 'prop-types';

const ToCurrency = ({currency, value}) => (
    <div>{`To ${currency} in value ${value}`}</div>
);

ToCurrency.defaultProps = {
    currency: 'EUR',
    value: 0
  };
  
  ToCurrency.propTypes = {
    currency: PropTypes.string.isRequired,
    value: PropTypes.number,
  };
  
export default ToCurrency;