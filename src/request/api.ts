import service from ".";

interface logindata {
    username : string;
    password: string;
}
export function login(data: logindata ) {
    return service({
        url:'./api/login',
        method: 'post',
        data 
    })
}

export function getGoodList(){
    return service({
        url:'./api/getGoodList',
        method: 'get',
    })
}