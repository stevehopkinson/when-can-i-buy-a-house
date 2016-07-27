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
