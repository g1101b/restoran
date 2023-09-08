export interface BookingProps {
	times: string[];
	changeTimes?: Dispatch<SetStateAction<string[]>>;
}
