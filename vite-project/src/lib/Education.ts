export class Education {
  constructor (
    public id: number,
    public school: string,
    public field: string,
    public description: string[] , //City
    public startDate: string[], // Month, year
    public logo: string, //logo of company
    public endDate?: string[], //can be null, incase I dont work there anymore
  ) {}
}
