import React from 'react'
import {BookingForm} from '../../components/BookingForm'

import './Booking.scss'

export const Booking: React.FC = () => {
	return (
		<div className="booking-form">
			<BookingForm />
		</div>
	)
}
