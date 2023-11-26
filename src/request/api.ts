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

export function getUserList(){
    return service({
        url:'./api/getUserList',
        method: 'get',
    })
}

export function getRoleList(){
    return service({
        url:'./api/getRoleList',
        method: 'get',
    })
}

export function getAuthorityList(){
    return service({
        url:'./api/getAuthorityList',
        method: 'get',
    })
}