import { AddressModel } from './address.model';
import { AdditionalInformationModel } from './additional-information.model';

export class PersonModel {
  id?: number;
  firstName: string = '';
  lastName: string = '';
  address: AddressModel = new AddressModel();
  phoneNumber: number = 0;
  dateOfBirth: Date | undefined;
  email: string = '';
  supervisor: PersonModel | undefined;
  additionalInformation: AdditionalInformationModel = new AdditionalInformationModel();

}
