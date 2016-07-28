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

function buildGraph(depositData) {
	var minYear = depositData[0].year; 
	var maxYear = depositData.slice(-1)[0].year;
	var maxValue = Math.max(depositData.slice(-1)[0].savings, depositData.slice(-1)[0].deposit);
	
	var axes = "";
	
	var savingsLine = "";
	for (var item of depositData) {
		var cx = Math.round(percentBetween(item.year, minYear, maxYear));
		var cy = Math.round(100 - percentBetween(item.savings, 0, maxValue));
		savingsLine += "<circle cx ='" + cx + "%' cy='" + 100 - cy + "%' r = '4' fill='rgb(28,144,243)' />"
	}
	
	var depositLine = "";
	for (var item of depositData) {
		var cx = Math.round(percentBetween(item.year, minYear, maxYear));
		var cy = Math.round(100 - percentBetween(item.deposit, 0, maxValue));
		savingsLine += "<circle cx ='" + cx + "%' cy='" + 100 - cy + "%' r = '4' fill='rgb(205,75,91)' />"
	}
	return savingsLine + depositLine;
}
