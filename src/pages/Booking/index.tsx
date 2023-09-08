import React, { SetStateAction, Dispatch } from 'react'
import {BookingForm} from '../../components/BookingForm'

import './Booking.scss'
import {BookingProps} from './booking'


export const Booking: React.FC<BookingProps> = ({times, changeTimes}) => {
	return (
		<div className="booking">
			<div className="container">
				<BookingForm times={times} changeTimes={changeTimes} />
			</div>
		</div>
	)
}
