let user = new Object();

user.firstName = "osama";
user.lastName = "Hesham";
user["age"]=37;

user.getFullName = function(){
    return `full name is ${user.firstName} ${user.lastName}`;
};
console.log(user);
console.log(user.getFullName());