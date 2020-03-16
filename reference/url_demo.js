//const url = require('url'); // deprecated (?)

const myUrl = new URL('http://www.example.com:8000/apath/?id=100&status=active');

console.log(myUrl.href); //h ttp://www.example.com/?id=100&status=active
console.log(myUrl.href.anchor("linkname")); // <a name="linkname">http://www.example.com/apath/?id=100&status=active</a>
console.log(myUrl.pathname); // /apath/
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active' }
console.log(myUrl.search); // ?id=100&status=active
console.log(myUrl.host); // www.example.com:8000
console.log(myUrl.hostname); // www.example.com

myUrl.searchParams.append('abc', '123');
console.log(myUrl.search); // console.log(myUrl.search);

/*
id is 100
status is active
abc is 123
*/
myUrl.searchParams.forEach((val, key) => {
    console.log(`${key} is ${val}`);
});