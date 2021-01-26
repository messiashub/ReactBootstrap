import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm'

export default class Releases extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 01',
                    releaseDate: '25/01/2017'
                },
                {
                    id: 2,
                    releaseName: 'Release 02',
                    releaseDate: '25/01/2018'
                },
                {
                    id: 3,
                    releaseName: 'Release 03',
                    releaseDate: '25/01/2019'
                },
                {
                    id: 4,
                    releaseName: 'Release 04',
                    releaseDate: '25/01/2020'
                }
            ]
        }
    }

    handleSubmit(e,{name,date}){
        e.preventDefault();
        var state = this.state;
        var myRelease ={
            id: this.state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases:state.releases.concat(myRelease)});
    }

    render() {
        return (
            <div className="container" style={{paddingTop:"25px"}}>
                <ReleaseForm  submitHandler={this.handleSubmit}/>,
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ReleaseName</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            return (
                                <tr>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm">Danger</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }


}