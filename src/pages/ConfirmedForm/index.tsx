import {useNavigate} from 'react-router-dom'
import './Confirmed.scss';

export const ConfirmedBooking = () => {
  const nav = useNavigate();

    return (
      <div className="confirmed container">
        <div className="confirmed__block">
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
        <button onClick={() => nav('/')}>Back to home</button>
        </div>
      </div>
    );
  };