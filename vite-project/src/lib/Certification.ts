export class Certification {
  constructor (
    public id: number,
    public title: string,
    public issuer: string, //company issuing
    public tags: string[], //skillzzz
    public date: string[], //month-year
    public logo: string, //logo of company
    public credential?: string[], //can be null, or [URL, null], OR [URL, Credential_ID]
  ) {}

}
