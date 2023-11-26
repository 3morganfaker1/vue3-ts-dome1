export interface UserList {
    id: number;
    name: string;
    role: string;
}

export interface select {
    name: string;
    role: string;
    id: number;
}

export interface role {
    roleId: number;
    roleName: number;
    auth: number[];
}

export interface ActiveUser {
    id: number;
    name: string;
    role: string;
}

export class userData {
    list:UserList[] = []; 
    selectData :select= {
        role: 'admin',
        name: '',
        id: 0
    }
    roleList:role[] = [];  
    active:ActiveUser = {
        id:0,
        name:'',
        role:''
    }
    isShow! : boolean;
}