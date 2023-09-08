export interface BookingProps {
	availableTimes: any[];
	dispatchOnDateChange?: React.Dispatch<Date>;
	submitData: (val: any) => void;
}
