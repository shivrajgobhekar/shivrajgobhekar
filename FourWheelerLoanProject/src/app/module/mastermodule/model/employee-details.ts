
import { Address } from "./address";
import { BankDetails } from "./bank-details";

export class EmployeeDetails 
{
    eid:number;
    ename:string;
    empUsername:string;
    empPassword:string;
    mobNo:string;

    localaddress: Address;
    permanentaddress:Address;
    emailid:string;
    bankDetails:BankDetails;
    role:string;
}
