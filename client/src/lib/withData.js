import React, { useState, useEffect } from 'react';
import axios from 'axios';

const withData = (Component) => (props) => {
    const [projects, setProjects] = useState(null);
    const [error, setError] = useState(false);

    const getProjects = async () => {
        try {
            const result = await axios.get('http://localhost:5000/api/projects');
            setProjects(result);
        } catch (e) {
            setError(true);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    if(error){
        return <div>There was an error</div>;
    }

    if(!projects) {
        return <div>Loading...</div>
    }

    return (<Component projects={projects} {...props}  />)
}

export default withData;

