/*Напишите функцию которая принимает бинарную
 функцию и вызывает её с имя аргументами.
 var addf2 = applyf(add);
 console.log(addf2(3)(4)); //7
 console.log(applyf(mul)(3)(4)); //12*/


function add(a) {
	return function (b) {
		return a + b;
	}
}

function mul(a) {
	return function (b) {
		return a * b;
	}
}

function applyf(binary) {
	return function(x) {
		return function(y) {
			return binary(x)(y);
		}
	}
}



var addf2 = applyf(add);
console.log(addf2(3)(4)); //7
console.log(applyf(mul)(3)(4)); //12