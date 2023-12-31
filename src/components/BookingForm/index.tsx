import React from 'react'

import {useFormik} from 'formik'
import * as yup from 'yup'

import './BookingForm.scss'

import { BookingProps } from './booking'

export const BookingForm: React.FC<BookingProps> = ({availableTimes, dispatchOnDateChange, submitData}) => {

	const initialValues = {
		date: '', 
		time: availableTimes[0],
		guestsAmount: 1,
		occasion: 'Birthday',
	}

	const validate = () => {
		return yup.object({
			date: yup.string().required('Required'),
			time: yup.string().required('Required'),
			guestsAmount: yup.number().min(1).max(10).required('Required'),
			occasion: yup.string().required('Required'),
		})
	}

	const submit = (values: object) => {
		submitData(values)
	}

	const formik = useFormik({
		initialValues, 
		validationSchema: validate,
		onSubmit: submit
	})

	return (
		<form className='form' onSubmit={formik.handleSubmit}>

			<h3>Book a table</h3>

			<div className="field">
				<label htmlFor="date">Choose date</label>
				<input 
					type="date" 
					id="date" 
					{...formik.getFieldProps('date')} 
				/>
				{formik.touched.date && formik.errors.date ? (
					<div>{formik.errors.date}</div>
				) : null}
			</div>

			<div className="field">
				<label htmlFor="time">Choose time</label>
				<select 
					id="time" 
					{...formik.getFieldProps('time')} 
				>
					{
						availableTimes && availableTimes.map((item, idx) => (
							<option key={`${item} ${idx}`}>{item}</option>
						))
					}
				</select>
				{formik.touched.time && formik.errors.time ? (
					<div>{formik.errors.time as React.ReactNode}</div>
				) : null}
			</div>

			<div className="field">
				<label htmlFor="guests">Number of guests</label>
				<input 
					type="number" 
					placeholder="1" 
					id="guests" 
					{...formik.getFieldProps('guests')} 
				/>
				{formik.touched.guestsAmount && formik.errors.guestsAmount ? (
					<div>{formik.errors.guestsAmount}</div>
				) : null}
			</div>

			<div className="field">
				<label htmlFor="occasion">Occasion</label>
				<select id="occasion"  {...formik.getFieldProps('occasion')}>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				{formik.touched.occasion && formik.errors.occasion ? (
					<div>{formik.errors.occasion}</div>
				) : null}
			</div>

			<div className="field">
				<input type="submit" value="Make Your reservation" />
			</div>
		</form>
	)
}
