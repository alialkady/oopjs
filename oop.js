let user ={
    //properties
    firstName:"Ali",
    lastName:"Hesham",
    age: 16,
    addresses: {
        eg:"Giza",
        usa:"california",
        ksa:"riyadah",
    },
    //methods
    getFullName: function(){
        return `full name: ${user.firstName} ${user.lastName} `
    },
    getAgeInDays: ()=>`your age is ${user.age}` ,
};

console.log(user.firstName); //object dot notation
console.log(user["lastName"]);//bracket notation
console.log(user.getFullName());
console.log(user.addresses.eg);
console.log(user.getAgeInDays());
//arrow function doesn't use 'return'