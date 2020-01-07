import React from 'react';
import DrumPad from '@/components/DrumPad';

class PadBank extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let padBank;
        this.props.power ?
            padBank = this.props.currentPadBank.map((drumPad, index) => {
                return (
                    <DrumPad
                        key={index}
                        clipId={drumPad.id}
                        clip={drumPad.url}
                        keyTrigger={drumPad.keyTrigger}
                        keyCode={drumPad.keyCode}
                        updateDisplay={this.props.updateDisplay}
                        power={this.props.power} />
                )
            }) :
            padBank = this.props.currentPadBank.map((drumPad, index) => {
                return (
                    <DrumPad
                        key={index}
                        clipId={drumPad.id}
                        clip="#"
                        keyTrigger={drumPad.keyTrigger}
                        keyCode={drumPad.keyCode}
                        updateDisplay={this.props.updateDisplay}
                        power={this.props.power} />
                )
            });
        return (
            <div className="pad-bank" >
                {padBank}
            </div>
        )
    }
}

export default PadBank;