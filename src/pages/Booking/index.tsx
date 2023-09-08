import React from 'react'
import {useNavigate} from 'react-router-dom'
import {BookingForm} from '../../components/BookingForm'

import { fetchAPI, submitAPI } from '../../api/api'

import './Booking.scss'

const updateTimes = (availableTimes: any[], date: Date) => {
	const response = fetchAPI(new Date(date));
	return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = (initialAvailableTimes: any[]) => 
  	[...initialAvailableTimes, ...fetchAPI(new Date())];

export const Booking: React.FC = () => {
	const navigate = useNavigate();
	const [availableTimes, dispatchOnDateChange] = React.useReducer(updateTimes, [], initializeTimes);

	const submitData = (formData: any) => {
		const response = submitAPI(formData);
		if (response) navigate('/confirmed');
	}; 

	return (
		<div className="booking">
			<div className="container">
				<BookingForm 
					availableTimes={availableTimes} 
					dispatchOnDateChange={dispatchOnDateChange} 
					submitData={submitData}
				/>
			</div>
		</div>
	)
}
