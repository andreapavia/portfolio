import * as React from 'react';

const NotFoundPage = () => {
    return (
        <main>
            <h1>Page not found</h1>
            <p>Sorry 😔, we couldn’t find what you were looking for.</p>
        </main>
    );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
