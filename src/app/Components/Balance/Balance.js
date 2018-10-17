import React from 'react';
import { BalanceText } from './Balance.styles';

const Balance = ({symbol, balance, insufficientCurrency}) => <BalanceText insufficientCurrency={insufficientCurrency}> Balance: {symbol}{balance}</BalanceText>;

export default Balance;
