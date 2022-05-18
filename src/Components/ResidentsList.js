import React from 'react';

function ResidentsList(props) {
	const {nameList} =props;
	console.log('listaod ',nameList)
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
			{nameList.map((item,key)=>
			{return(
				<li key={item} className="slide-up-fade-in">{item}	</li>)
				} 
			)}
			</ul>
		</div>
	);
}

export default ResidentsList;
