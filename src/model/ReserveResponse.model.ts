import { TimeBlock } from "./TimeBlock.enum";

export interface ReserveResponse {
    appointmentTime : Date;
    appointmentTimeBlock : TimeBlock;
    aessage : string;
    isDone : boolean;
}