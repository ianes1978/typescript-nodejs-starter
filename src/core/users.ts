export const checkEmail = function (email) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
}