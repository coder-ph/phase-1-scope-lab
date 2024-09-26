// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
//
function setBestCustomer() {
    window.bestCustomer = 'not bob';  
}  

function overwriteBestCustomer(bestCustomer){
    window.bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'none'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'me';
}
console.log(changeLeastFavoriteCustomer())