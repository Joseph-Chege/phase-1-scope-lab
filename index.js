// Write your solution in this file!

var customerName =  "bob"

function upperCaseCustomerName(){
    if (customerName !== undefined){
        return customerName = customerName.toUpperCase();

    }      

}  

function setBestCustomer(){
    window.bestCustomer = "not bob"
}
    
function  overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "suzy"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Pep Guardiola"
}