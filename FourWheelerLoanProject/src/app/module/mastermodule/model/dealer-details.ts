import { Address } from "./address";
import { BankDetails } from "./bank-details";

export class DealerDetails {
    did:number;
    dname:string;
    dDob:string;
    demailId:string;
    dMobileno:string;
    dAdharNo:string;
    dLocalAddress:Address;
    dPermanentAddress:Address;
    dBankDetails:BankDetails;
}
