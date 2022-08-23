var customerName = 'bob';

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

function setBestCustomer(customer="not bob") {
	bestCustomer = customer;
}

function overwriteBestCustomer(customer="maybe bob") {
	bestCustomer = customer;
}

const leastFavoriteCustomer = "bob"
function changeLeastFavoriteCustomer(customer="not bob") {
	leastFavoriteCustomer= customer;
}
