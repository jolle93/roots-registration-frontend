import { DrivingStatusEnum } from './driving-status.enum';

export class AdditionalInformationModel {
  gettingThereStatus: DrivingStatusEnum = DrivingStatusEnum.DRIVER;
  numberPlate: string = '';
  arrivalTimeByTrain: Date | undefined;
  laterArrival: boolean = false;
  roomMembers: string = '';
  nourishment: string = '';
  medicalStatus: string = '';
  vaccination: string = '';
  specialPaymentNeeded: boolean = false;
  specialPayment: string = '';
  npcStatus: boolean = false;
  paramedic: boolean = false;
  vision: boolean = false;
}
