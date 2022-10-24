export class ClientView
{
    ID! : string
    FirstNameAndLastName! : string
    Address : string = ""
    DateOfBirth : Date = new Date()
    Phone : string = ""
    MobilePhone! : string
    DatePositiveResult : Date = new Date()
    DateRecovery : Date  = new Date()    
}

export class VaccinationView
{
    ClientID! : string
    NumberVaccination! : number
    DateVaccination! : Date
    VaccineManufacturer! : string
    ID! : number
}