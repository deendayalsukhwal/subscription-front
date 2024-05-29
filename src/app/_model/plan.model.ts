import { FileHandle } from "./file-handle.model";

export interface Plan{
    PlanId: number
    PlanName: string,
    PlanDescription: string,
    PlanDiscountedPrice: number,
    PlanActualPrice: number,
    isActive : boolean,
    createdAt : Date,
    updatedAt : Date
}