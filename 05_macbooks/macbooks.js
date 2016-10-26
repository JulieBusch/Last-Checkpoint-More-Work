function Laptop(year, gigs){
	this.year = year;
	this.hd = gigs;
}

Laptop.prototype.checkSpecs = function(){
	return "Year: " + this.year + ", HD: " + this.hd;
};

function Macbook(year, gigs, color){
	Laptop.apply(this, [year, gigs]);
	this.color = color;
}

function extendWithObjectCreate(comp1, comp2){
	comp1.prototype = Object.create(comp2.prototype);
	
}

function extendWithNewKeyword(comp1, comp2){
	comp1.prototype = new comp2;
}