import React, { Component } from 'react'
import HomeCard from '../ui/HomeCard'
import img1 from '../assets/katerine.jpg';
import img2 from '../assets/gal.jpg'
import img3 from '../assets/angelina.jpg'

export default class Home extends Component {

    homeCardReleases = {
        img:img1,
        title: 'Releases',
        text: 'Manage Release',
        action: () => alert('Releases Clicked'),
    }
    homeCardBacklog = {
        img:img2,
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => alert('Backlog Clicked'),
    }
    homeCardSprints = {
        img:img3,
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => alert('Sprints Clicked'),
    }
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard img={this.homeCardReleases.img}
                        title={this.homeCardReleases.title}
                        text={this.homeCardReleases.text}
                        action={this.homeCardReleases.action} />
                    <HomeCard {...this.homeCardBacklog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
        )
    }
}