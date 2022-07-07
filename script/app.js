String.prototype.cleanup = function() {
	// Permet de n'avoir que des lettres standards, sans accents.
   return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
}

function updateBars (e)
{
	const refBarsContainer = document.getElementById("histogram");
	let arr = [];
	e.value.cleanup().split("").forEach( (element) => {
		if (arr[element]) {
			arr[element] += 1;
		} else {
			arr[element] = 1;
		}
		//console.log(arr)
	});

	refBarsContainer.innerHTML = "";
	let highest = 0;
	Object.keys(arr).sort().forEach( (element) => {
		let resultStr = "";
		resultStr += "<div class=\"bar-container\">";
		resultStr += 	"<div class=\"bar\" id=\"bar-" + element + "\"></div>";
		resultStr += 	"<div class=\"bar-name\">" + element + "</div>";
		resultStr +=	"<div class=\"bar-value\">" + arr[element] + "</div>";
		resultStr += "</div>";
		refBarsContainer.innerHTML += resultStr;

		if (arr[element] > highest) {
			highest = arr[element];
		}
		// console.log(highest);

	});

	Object.keys(arr).sort().forEach( (element) => {
		let refBar = document.getElementById("bar-"+element);
		// console.log(refBar);
		refBar.style.height = arr[element] / highest * 100 + "%";
	});
}