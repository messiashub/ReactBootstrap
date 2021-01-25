import React from 'react';

/* COMPONENTE */

const HomeCard = (props) => {
    return (
        <div className="col-12 col-sm-4">
            <div className="card" style={{width:"20rem"}}>
                <img src={props.img} className="card-img-top rounded mx-auto d-block" style={{paddingTop:'3px',width:'100px',height:'120px'}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text cor">{props.text}</p>
                        <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
                    </div>
            </div>
        </div>

    )
}




export default HomeCard;