import React, { Component } from 'react';

/**
 * Class conteining the presentation.
 */
class Presentation extends Component {
    public render(): JSX.Element {
        return (
            <>
                <h1>Welcome to this boilerplate</h1>
                <p>
                    This comes pre-configiured with:
                    <ul>
                        <li>Typescript</li>
                        <li>Ant Design</li>
                        <li>Redux</li>
                        <li>React Router</li>
                        <li>TsLint + lint config</li>
                        <li>Prettier</li>
                    </ul>
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Visit our Repo
                </a>
            </>
        );
    }
}

export default Presentation;
