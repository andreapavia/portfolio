import * as React from 'react'
import Welcome from '../components/welcome/Welcome';

import '../styles/global.scss'

const IndexPage = () => {
    return (
        <main>
            <Welcome />
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
