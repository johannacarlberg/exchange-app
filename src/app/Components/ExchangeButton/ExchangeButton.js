import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCIES } from '../../../utils/constants';
import { Button } from '../styles.js'

const ExchangeButton = () => {
  function onClick(e) {
    e.preventDefault();
    console.log('clicked')
  }

  return (<Button primary onClick={onClick} disabled={false}>Exchange</Button>
    )
};

ExchangeButton.defaultProps = {
  };
  
  ExchangeButton.propTypes = {
  };

export default ExchangeButton;
