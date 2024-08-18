
import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation

const PageNotFoundComponent = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
            <Link to="/" style={styles.link}>Go back to the homepage</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: '6rem',
        margin: '0',
    },
    message: {
        fontSize: '1.5rem',
    },
    link: {
        marginTop: '20px',
        fontSize: '1.2rem',
        color: '#007BFF',
        textDecoration: 'none',
    },
};

export default PageNotFoundComponent;
