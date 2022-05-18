import React,{useState} from 'react';

function Error(props) {
	const {msg} = props

	return (msg.length > 0 ) && <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in"> {msg} </div>
}

export default Error;
