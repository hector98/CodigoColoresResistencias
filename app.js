const band1 = document.getElementById("band1");
const band2 = document.getElementById("band2");
const band3 = document.getElementById("band3");
const band4 = document.getElementById("band4");

const result = document.getElementById("result");
/*
band1.options[band1.selectedIndex].value = "brown";
band2.options[band2.selectedIndex].value = "black";
band3.options[band3.selectedIndex].value = "red";
band4.options[band4.selectedIndex].value = "gold";
*/

/*const colors = {
	"black": "#000000",
	"brown": "#804000",
	"red": "#FF4422",
	"orange": "#F4A020",
	"yellow": "#FFFF00",
	"green": "#01DF01",
	"blue": "#0101DF",
	"purple": "#7401DF",
	"gray": "#848484",
	"white": "#FFFFFF",
	"gold": "#CDA434"
}*/

function band1Band2(bands)
{
	let r;
	if(bands === "black")
	{
		r = 0;
	}
	else if(bands === "brown")
	{
		r = 1;
	}
	else if(bands === "red")
	{
		r = 2;
	}
	else if(bands === "orange")
	{
		r = 3;
	}
	else if(bands === "yellow")
	{
		r = 4;
	}
	else if(bands === "green")
	{
		r = 5;
	}
	else if(bands === "blue")
	{
		r = 6;
	}
	else if(bands === "purple")
	{
		r = 7;
	}
	else if(bands === "gray")
	{
		r = 8;
	}
	else if(bands === "white")
	{
		r = 9;
	}
	
	return r;
}

function bandMult(ban3)
{
	let r;
	if(ban3 === "black")
	{
		r = 1;
	}
	else if(ban3 === "brown")
	{
		r = 10;
	}
	else if(ban3 === "red")
	{
		r = 100;
	}
	else if(ban3 === "orange")
	{
		r = 1000;
	}
	else if(ban3 === "yellow")
	{
		r = 10000;
	}
	else if(ban3 === "green")
	{
		r = 100000;
	}
	else if(ban3 === "blue")
	{
		r = 1000000;
	}
	else if(ban3 === "purple")
	{
		r = 10000000;
	}
	else if(ban3 === "gold")
	{
		r = 0.1;
	}
	else if(ban3 === "silver")
	{
		r = 0.01;
	}

	return r;
}

function tolerance(tol)
{
	let r;
	if(tol === "brown")
	{
		r = 1;
	}
	else if(tol === "red")
	{
		r = 2;
	}
	else if(tol === "green")
	{
		r = 0.5;
	}
	else if(tol === "blue")
	{
		r = 0.25;
	}
	else if(tol === "purple")
	{
		r = 0.10;
	}
	else if(tol === "gray")
	{
		r = 0.05;
	}
	else if(tol === "gold")
	{
		r = 5;
	}
	else
	{
		r = 10;
	}

	return r;
}

function calculate(b)
{
	let band1Color = band1.options[band1.selectedIndex].value;
	let band2Color = band2.options[band2.selectedIndex].value;
	let band3Color = band3.options[band3.selectedIndex].value;
	let band4Color = band4.options[band4.selectedIndex].value;
	let total = `${band1Band2(band1Color)}.${band1Band2(band2Color)}`;
	total = parseFloat(total) * bandMult(band3Color);

	let m = "";
	if(total >= 1000 && total <= 100000)
	{
		total /= 1000;
		m = "K";
	}
	else if(total >= 100000 && total <= 100000000)
	{
		total /= 100000;
		m = "M";
	}
	else if(total >= 100000000)
	{
		total /= 100000000;
		m = "G";
	}

	result.innerText = `${total}${m}Ω ±${tolerance(band4Color)}%`;
}

band1.addEventListener("change", (e) => {
	band1.options[band1.selectedIndex].value = e.target.value;
	calculate();
	band1.style.backgroundColor = e.target.value;
});

band2.addEventListener("change", (e) => {
	band2.options[band2.selectedIndex].value = e.target.value;
	calculate(e.target.value);
	band2.style.backgroundColor = e.target.value;
});

band3.addEventListener("change", (e) => {
	band3.options[band3.selectedIndex].value = e.target.value;
	calculate(e.target.value);
	band3.style.backgroundColor = e.target.value;
	console.log(e.target.value);
});

band4.addEventListener("change", (e) => {
	band4.options[band4.selectedIndex].value = e.target.value;
	calculate(e.target.value);
	band4.style.backgroundColor = e.target.value;
});

calculate();
