var foo = 1;
function bar() {
	if (!foo) {
		var foo = 10;
	}
	console.log(foo);
}
bar();


var a = 1;
function b() {
	a = 10;
	return;
	function a() {}
}
b();
console.log(a);