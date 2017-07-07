// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

function presentNumber(n){
	return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
