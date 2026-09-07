import {validateUuid} from "./uuid.js";

export class PurchaseOrderId {
    #value;
    constructor(value){
        if (!validateUuid(value)){

        }
    }

}