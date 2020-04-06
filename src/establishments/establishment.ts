export interface Establishment {
    id: string,
    name: string,
    status: EstablishmentStatus
}

export enum EstablishmentStatus
{
    AwaitingValidation = 1,
    Disapproved = 2,
    Active = 3,
    Inactive = 4
}