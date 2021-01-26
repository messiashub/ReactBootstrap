import React from 'react';

const ReleaseForm = ({submitHandler}) => {
    let _releaseName, _releaseDate;
    const handleSubmit=(e)=>{
        console.log('ReleaseFrom -> handleSubmit');
        
        submitHandler(e, {
            name:_releaseName.value,
            date: _releaseDate.value}
            );
            clearForm();
    }

    const clearForm=()=>{
        _releaseDate.value="";
        _releaseName.value="";
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <label className="sr-only" for="inlineFormInput">ReleaseName</label>
                    <input type="text"ref={input=>_releaseName=input} className="form-control mb-2" id="inlineFormInput" placeholder="Set the Name"/>
                </div>
                    <div className="col-auto">
                        <label className="sr-only" for="inlineFormInputGroup">ReleaseDate</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                               
                            </div>
                            <input type="text"ref={input=>_releaseDate=input} className="form-control" id="inlineFormInputGroup" placeholder="Set the Date"/>
                            </div>
                        </div>
                       
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-2">Save</button>
                            </div>
                        </div>
        </form>
    )
};


export default ReleaseForm