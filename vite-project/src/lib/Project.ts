export class Project {
  constructor(
    public id: number, //unique id number, for now we'll be making this as a front-end only site, but it'd be cool to host this information on the backend.
    public title: string,
    public description: string, 
    public year: number, //year, 2023, etc | if unfinished, put 0
    public category: string, //is it a software coding project, pixel art, 
    public tags: string[], //tags
    public stack: string[], //url to technologies used, for the same of my sanity, lets call it a stack (so an art showcase would be me saying "aseprite")
    public screenshot: string, //url to screenshot image 
    public repo?: string, // url to repo, can be null
    public demo?: string, //url to website, or whatever is hosted. Can be null
    public wip?: boolean, // are we still working on it
  ) {
    //yay tyoescript
  }
  hasDemo(): boolean {
    return !!this.demo && this.demo.trim() !== "";
  }

  hasRepo(): boolean {
    return !!this.repo && this.repo.trim() !== "";
  }

  getTagsString(): string {
    return this.tags.join(", ");
  }

  getStackString(): string {
    return this.stack.join(", ");
  }
}

