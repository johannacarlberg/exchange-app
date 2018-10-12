import React from 'react';
import FromCurrency from './FromCurrency/FromCurrency';
import ToCurrency from './ToCurrency/ToCurrency';

export default class Exchange extends React.Component {
    render () {
        return (
            <div>
                <p>HI</p>
                <FromCurrency currency="pound"/>
                <ToCurrency currency="kr"/>
            </div>
        )
    }
}