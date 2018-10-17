import React from 'react';
import { BalanceText } from './Balance.styles';

const Balance = ({overDraft, symbol, balance, insufficientCurrency}) => {
  return(<BalanceText overDraft={overDraft} insufficientCurrency={insufficientCurrency}> Balance: {symbol}{balance}</BalanceText>)
};

export default Balance;