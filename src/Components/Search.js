import React from 'react';
import { useState } from 'react';
import { STUDENTS } from "../studentsList";
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	console.log( 'joiningDate ', joiningDate)
	console.log( 'validityDate ',validityDate)
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search( props) {
	const {nameList,setNameList, setmsg} =props
	const [studentName, setName] = useState('');
	const [joiningDate, setDate] = useState('');
	
	const validarName = ((name)=>{
		for (let index = 0; index < STUDENTS.length; index++) {
			const datos = STUDENTS[index];
			if (datos.name === name){
				return datos }
		}
		return null
	})

	const addReg = ((name,date) => {
		
		const respDatosUser = validarName(name)
		let msgText=''
		if (respDatosUser && date.length >0 ){
			if (!nameList.includes(name)) {

				if( !checkValidity(respDatosUser.validityDate,date)){
				setNameList([...nameList,name])
				}
				else{
					msgText='Sorry, ' + name +  '´s validity has Expired!'
					console.log(msgText)
					setmsg(msgText)
				}}
			else {
				msgText='Sorry, '  + name + ' already exists was loaded'
				console.log(msgText)
				setmsg(msgText)}
		} else {
			if (date.length <= 0){
				msgText='Sorry, date not empty!'
					console.log(msgText)
					setmsg(msgText)
			}
			else{
					msgText='Sorry, ' + name + 'is not a verified student!'
					console.log(msgText)
					setmsg(msgText)
			}
		}
	})
	

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input value = {studentName } onInput={e => setName(e.target.value)} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" />
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input value = {joiningDate} onInput={e => setDate(e.target.value)} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" />
				</div>
			</label>
			<button onClick={()=> addReg(studentName,joiningDate)} type="button" data-testid="addBtn" className="small mb-0">Add</button>
		</div>
	);
}

export default Search;