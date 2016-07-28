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
