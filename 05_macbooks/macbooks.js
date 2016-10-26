function Laptop(year, gigs){
	this.year = year;
	this.hd = gigs;
}

Laptop.prototype.checkSpecs = function(){
	return "Year: " + this.year + ", HD: " + this.hd;
};

function Macbook(year, gigs, color){
	Laptop.call(this, year, gigs);
	this.color = color;
}

function extendWithObjectCreate(laptop, prototype){
	
}