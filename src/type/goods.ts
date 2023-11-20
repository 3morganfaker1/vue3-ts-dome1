export interface goodList {
    title: string;
    id: number;
    userId: number;
    introduce: string;
}

export interface selectData {
    title: string;
    introduce: string;
    page: number;
    pageSize:number;
     count: number;
}

export class listData {
    list:goodList[] = [];
    selectData:selectData = {
        title: "",
        introduce: "",
        page: 1,
        pageSize: 10,
        count: 0
    }
}