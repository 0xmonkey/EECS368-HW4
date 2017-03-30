// HW4
//Date: 2/28/17

function Ghost(color,x,y){
	this.color = color;
	if(x > 16 || x < 0 || y > 16 || y < 0)
	{
		throw new Error("The cordinates you entered are invalid. The grid is only 16 by 16");
	}
	this.xCord = x;
	this.yCord = y;
}

Ghost.prototype.up = function(){
	if(this.yCord == 16)
	{
		throw new Error("ERROR: That would move the ghost off of the board.");
	}
	else{
		this.yCord++;
		console.log("You move your ghost one unit up, new cordinates are (" + this.xCord + "," + this.yCord + ").");
	}
};

Ghost.prototype.down = function(){
	if(this.yCord == 0)
	{
		throw new Error("ERROR: That would move the ghost off of the board.");
	}
	else{
		this.yCord--;
		console.log("You move your ghost one unit down, new cordinates are (" + this.xCord + "," + this.yCord + ").");
	}
};

Ghost.prototype.left = function(){
	if(this.xCord == 0)
	{
		throw new Error("ERROR: That would move the ghost off of the board.");
	}
	else{
		this.xCord--;
		console.log("You move your ghost one unit to the left, new cordinates are (" + this.xCord + "," + this.yCord + ").");
	}
};

Ghost.prototype.right = function(){
	if(this.xCord == 16 )
	{
		throw new Error("ERROR: That would move the ghost off of the board.");
	}
	else{
		this.xCord++;
		console.log("You move your ghost one unit to the right, new cordinates are (" + this.xCord + "," + this.yCord + ").");
	}
};

Ghost.prototype.toString = function(){
	var theString = "A " + this.color + " Ghost with the position (" + this.xCord + "," + this.yCord + ").";
	return theString;
};

var foo = new Ghost("Yellow",5,2);
var foo2 = new Ghost("Magenta",4,7);
