export class Url {

    url: string;
    name: string;
    description: boolean;
    lastVisited: Date;
    
    constructor(public _url: string, public _name: string) {}
}
