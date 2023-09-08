import React from 'react'
import {BookingForm} from '../../components/BookingForm'

import { fetchAPI } from '../../api/api'

import './Booking.scss'

const updateTimes = (availableTimes: any[], date: Date) => {
	const response = fetchAPI(new Date(date));
	return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = (initialAvailableTimes: any[]) => 
  	[...initialAvailableTimes, ...fetchAPI(new Date())];

export const Booking: React.FC = () => {
	const [availableTimes, dispatchOnDateChange] = React.useReducer(updateTimes, [], initializeTimes);

	return (
		<div className="booking">
			<div className="container">
				<BookingForm 
					availableTimes={availableTimes} 
					dispatchOnDateChange={dispatchOnDateChange} 
				/>
			</div>
		</div>
	)
}
