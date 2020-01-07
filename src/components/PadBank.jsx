import React from 'react';
import DrumPad from '@/components/DrumPad';

class PadBank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="pad-bank">
            <DrumPad />
        </div>);
    }
}

export default PadBank;