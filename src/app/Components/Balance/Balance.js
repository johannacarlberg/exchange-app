import React from 'react';
import { BalanceText } from './Balance.styles';

const Balance = ({symbol, balance, insufficientCurrency}) => <BalanceText insufficientCurrency={insufficientCurrency}> Balance: {symbol}{Number(balance).toFixed(2)}</BalanceText>;

export default Balance;
