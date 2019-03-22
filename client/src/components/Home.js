import React from 'react';
import withData from '../lib/withData';

function Home(props) {
    console.log(props)
    return (
        <div>
            hi
        </div>
    )
}

export default withData(Home);