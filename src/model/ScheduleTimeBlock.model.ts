import { TimeBlock } from "./TimeBlock.enum";

export interface ScheduleTimeBlock{
    appointmentTimeBlock: TimeBlock  ;
    isAvailable : boolean ;
    ownTheReservation: boolean;


}