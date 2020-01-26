import React, { Component } from 'react';
import '../../index.css';


class GitProfile extends Component {
    componentDidMount() {
        const { fetch_actions } = this.props;
        const orgs = 'pygame';
        fetch_actions(orgs);
    }

    renderData = (result) => {
        const { languages, public_repos, topics, watchers } = result;

        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <h3>Languages</h3>
                        {languages.map(lang => <p key={lang}>{lang}</p>)}
                    </div>
                    <div className="col-md-2">
                        <h3>Forks</h3>
                        <p>{public_repos.forked_repos}</p>
                    </div>
                    <div className="col-md-2">
                        <h3>Original</h3>
                        <p>{public_repos.original_repos}</p>
                    </div>
                    <div className="col-md-2">
                        <h3>Watchers</h3>
                        <p>{watchers}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() { 
        const { gdata } = this.props

        return (
        <div className="container">
            <h1>Welcome to your Git Profile</h1>
            <br />
            {!gdata.result ? <h4>No data</h4> : this.renderData(gdata.result)}
        </div>
    );
    }
}

export default GitProfile;
