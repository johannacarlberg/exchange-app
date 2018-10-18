import React from 'react';
import PropTypes from 'prop-types';

import { CURRENCIES } from '../../../utils/constants';
import { SelectInputContainer, StyledSelectInput } from './Select.styles';

const Select = ({ onChange, currency }) => (
  <SelectInputContainer>
    <StyledSelectInput onChange={onChange} value={currency.currency}>
      {CURRENCIES.map(exchange => (
        <option key={exchange.code} value={exchange.code}>
          {exchange.code}
        </option>
      ))}
    </StyledSelectInput>
  </SelectInputContainer>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  currency: PropTypes.oneOfType([PropTypes.object]),
};

Select.defaultProps = {
  currency: {},
};
export default Select;
