export class Experience {
  constructor (
    public id: number,
    public title: string,
    public company: string,
    public description: string[],
    public location: string, //City
    public locationType: string, //remote, on-site, hybrid
    public type: string, //internship, apprenticeship, etc etc
    public startDate: string[], // Month, year
    public category: string, //what kind of work was it
    public logo: string, //logo of company
    public endDate?: string[], //can be null, incase I dont work there anymore
  ) {}

}
