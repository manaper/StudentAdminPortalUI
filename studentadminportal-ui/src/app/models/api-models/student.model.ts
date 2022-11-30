import { Address } from "./address.mode";
import { Gender } from "./gender.model";

export interface Student{
  id: string,
  firstname: string,
  lastName: string,
  dateOfBirth: string,
  email: string,
  mobile: number,
  profileImageUrl: string,
  genderId: string,
  gender: Gender,
  address: Address
}
