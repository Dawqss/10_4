function Telefon(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Telefon.prototype.printInfo = function() {
	console.log('Smartphone brand: ' +this.brand);
	console.log('Smartphone color: ' +this.color);
	console.log('Smartphone price: ' +this.price +' $')
};

var iPhone11 = new Telefon ('Apple', 9999, 'white'),
	theBomb = new Telefon ('Samsung', 999, 'black'),
	Shell = new Telefon ('Microsoft', 500, 'pink');

iPhone11.printInfo();
theBomb.printInfo();
Shell.printInfo();