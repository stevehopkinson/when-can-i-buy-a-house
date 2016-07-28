function getDepositData(currentSavings, monthlySavings, savingsGrowth, currentDeposit, depositGrowth) {
	var currentYear = new Date().getFullYear();
	var years = [{year: currentYear, savings: Math.round(currentSavings), deposit: Math.round(currentDeposit)}];
	
	while (currentSavings < currentDeposit && years.length < 40) {
		currentSavings += (currentSavings / 100) * savingsGrowth + monthlySavings * 12;
		currentDeposit += (currentDeposit / 100) * depositGrowth;
		currentYear++;
		years.push({year: currentYear, savings: Math.round(currentSavings), deposit: Math.round(currentDeposit)});
	}
	
	return years;
}

function buildTable(depositData) {
	var yearRow = "<tr><th>Year:</th>"
	var savingsRow = "<tr><th>Projected savings:</th>"
	var depositRow = "<tr><th>Projected average deposit:</th>"
	
	for (var item of depositData) {
		yearRow += "<td>" + item.year + "</td>";
		savingsRow += "<td>" + item.savings + "</td>";
		depositRow += "<td>" + item.deposit + "</td>";
	}
	
	yearRow += "</tr>";
	savingsRow += "</tr>";
	depositRow += "</tr>";
	
	return "<table>" + yearRow + savingsRow + depositRow + "</table>";
}

function percentBetween(x, start, end) {
	return ((x - start) / (end - start)) * 100;
}

function getDepositData(currentSavings, monthlySavings, savingsGrowth, currentDeposit, depositGrowth) {
	var currentYear = new Date().getFullYear();
	var years = [{year: currentYear, savings: Math.round(currentSavings), deposit: Math.round(currentDeposit)}];
	
	while (currentSavings < currentDeposit && years.length < 40) {
		currentSavings += (currentSavings / 100) * savingsGrowth + monthlySavings * 12;
		currentDeposit += (currentDeposit / 100) * depositGrowth;
		currentYear++;
		years.push({year: currentYear, savings: Math.round(currentSavings), deposit: Math.round(currentDeposit)});
	}
	
	return years;
}

function buildTable(depositData) {
	// Set up table headers
	var yearRow = "<tr><th>Year:</th>"
	var savingsRow = "<tr><th>Projected savings:</th>"
	var depositRow = "<tr><th>Projected average deposit:</th>"
	
	// Iterate over each year in depositData and build rows
	for (var item of depositData) {
		yearRow += "<td>" + item.year + "</td>";
		savingsRow += "<td>" + item.savings + "</td>";
		depositRow += "<td>" + item.deposit + "</td>";
	}
	
	// Close rows
	yearRow += "</tr>";
	savingsRow += "</tr>";
	depositRow += "</tr>";
	
	return "<table>" + yearRow + savingsRow + depositRow + "</table>";
}

function percentBetween(x, start, end) {
	return ((x - start) / (end - start)) * 100;
}

function buildGraph(depositData) {
	// Set maximum/minimum for years and values, used to calculate relative coordinates
	var minYear = depositData[0].year; 
	var maxYear = depositData.slice(-1)[0].year;
	var maxValue = Math.max(depositData.slice(-1)[0].savings, depositData.slice(-1)[0].deposit);
	
	// Build the tags for the chart object
	var chartOpen = "<svg width='600' height='400'>\n";
	var chartClose = "</svg>\n";
	
	// Build the x and y axes
	var axes = "";
	axes += "\t<line x1='0%' y1='0%' x2='0%' y2='100%' style='stroke:rgb(128,128,128);stroke-width:2' />\n";
	axes += "\t<line x1='0%' y1='100%' x2='100%' y2='100%' style='stroke:rgb(128,128,128);stroke-width:2' />\n";
	
	// Parse deposit data into a series of coordinates
	var coords = [];
	for (var item of depositData) {
		var x = percentBetween(item.year, minYear, maxYear);
		var savingsy = 100 - percentBetween(item.savings, 0, maxValue);
		var deposity = 100 - percentBetween(item.deposit, 0, maxValue);
		coords.push({"x": x, "savingsy" : savingsy, "deposity" : deposity});
	}
	
	// Initiate the variables that will store the HTML code for the chart elements
	var savingsLine = "\t\t<polyline points='";
	var depositLine = "\t\t<polyline points='";
	var savingsPoints = "";
	var depositPoints = "";
	
	// Iterate through coordinates and build HTML for lines and points
	for (var coord of coords) {
		savingsLine += coord.x + "," + coord.savingsy + " ";
		depositLine += coord.x + "," + coord.deposity + " ";
		savingsPoints += "\t<circle cx ='" + coord.x + "%' cy='" + coord.savingsy + "%' r = '4' fill='rgb(28,144,243)' />\n"
		depositPoints += "\t<circle cx ='" + coord.x + "%' cy='" + coord.deposity + "%' r = '4' fill='rgb(205,75,91)' />\n"
	}
	
	// Close the HTML tags for the polylines
	savingsLine += "' style='fill: none; stroke: rgb(164, 211, 250); stroke-width: 0.4' />\n";
	depositLine += "' style='fill: none; stroke: rgb(235, 183, 189); stroke-width: 0.4' />\n";
	
	// Build the svg container to handle the polylines
	var containerOpen = "\t<svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>\n";
	
	var containerClose = "\t</svg>\n"
	
	// Build the chart object and return it
	return chartOpen + containerOpen + depositLine + savingsLine + containerClose + savingsPoints + depositPoints + axes + chartClose;
}
