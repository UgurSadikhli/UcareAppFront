// wwwroot/js/jwtHelper.js

function getRoleFromJwt(token) {
    const decoded = jwt_decode(token);
    return decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];  
}
function getNameFromJwt(token) {
    const decoded = jwt_decode(token);
    return decoded['name'];  
}
function getEmailFromJwt(token) {
    const decoded = jwt_decode(token);
    return decoded['email'];  
}
