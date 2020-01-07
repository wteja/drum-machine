import { hot } from 'react-hot-loader/root';
import React from 'react';
import PadBank from '@/components/PadBank';
import '@/assets/style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="app">
            <PadBank />
        </div>);
    }
}

export default hot(App);