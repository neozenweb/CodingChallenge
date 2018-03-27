// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(){

// Your code goes here!
var ht = document.getElementById("inputHeight").value;
var wd = document.getElementById("inputWidth").value;
var table = document.getElementById("pixelCanvas");
var delrows = document.getElementById("pixelCanvas").rows.length;

var row=0;
var cell =0;
var drow=0;

for(drow=0;drow < delrows;drow++)
{
	
	table.deleteRow(-1);
}

delrows = document.getElementById("pixelCanvas").rows.length;


for(r=0; r < ht; r++)
{
	row = table.insertRow(r);
   for(c=0; c < wd; c++)
   {
      
      cell = row.insertCell(c);
	  cell.addEventListener("click",chgClr,true);
	    
   }


}

}
function chgClr(){
	var clr = document.getElementById("colorPicker").value;
   this.setAttribute("bgcolor",clr);
}
