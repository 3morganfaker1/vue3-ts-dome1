export class InitData {
    id:number;
    authority : number[];
    constructor(id:number,authority:number[]){
        this.id = id,
        this.authority = authority
    }
    list:List[] = [];
    treeRef:any
}

export interface List {
    name: string,
    roleId: number,
    roleList?:List[],
    viewRole?: string
}