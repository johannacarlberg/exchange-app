import React from 'react';
import FromCurrency from './FromCurrency/FromCurrency';
import ToCurrency from './ToCurrency/ToCurrency';

export default class Exchange extends React.Component {


    render () {
        return (
            <div>
                <FromCurrency currency="GBP" value={0}/>
                <ToCurrency currency="SKR" value={0} />
            </div>
        )
    }
}