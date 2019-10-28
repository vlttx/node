const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized URL
console.log(myUrl.href); //toString() will do the same thing

//host (root domain)

console.log(myUrl.host);

//hostname (diff is that if there is a port, it does not include it)

console.log(myUrl.hostname);

//pathname

console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);
//Create object from params
console.log(myUrl.searchParams);
//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//we can loop through search params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
