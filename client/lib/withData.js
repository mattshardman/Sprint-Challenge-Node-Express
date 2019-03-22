import React, { useState, useEffect } from 'react';
import acios from 'axios';

const withData = (Component) => (props) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

    }, []);

    return (<Component {...props}  />)
}

export default withData;

