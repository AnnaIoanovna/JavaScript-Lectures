(function() {
  api.addModule("regExpServices", {hasTextBySample, getMtaches, getPartedPhone});
})
(function(){
	api.addMethod()
})
function hasTextBySample(string, regExp) {
	if (~string.indexOf(regExp)) {
		return true;
	}
	else {
		return false;
	}	
}
//console.log(hasTextBySample("dgsfzygfbs", "sfs"))

function getMtaches(string, regExp) {
	var re = new RegExp(regExp, "g");
	return string.match(re);
}
//console.log(getMatches("ghcatlklicatllhcatijl", "cat"));

function getPartedPhone(string) {
	
	var phoneRegExp = /\+(\d{1,3})\((\d{2,3})\)(\d{3}-\d{2}-\d{2})/;
	var valid = string.match(phoneRegExp);
	if (!valid) {
		alert("Invalid phone");

	 }
	else {var result = {countryCode:valid[1], cityCode:valid[2], phone:valid[3]};
	
	 }
	 return result;
}
//console.log(getPartedPhone("+897(876)567-98-67"));

function checkEveryLineMatch(string, regExp) {
	var exp = new RegExp(regExp, "mg");
	var exp2 = new RegExp("^", "mg")
	var match = string.match(exp);
	var match2 = string.match(exp2);
	return match.length == match2.length;
}
console.log(checkEveryLineMatch("hdiuehmadoei\njhgfremdfgd\nmffdtrgh", "^.*m.*"));

(function (){
	api.addModule("dateServices", {getDayByDate, isYearLeap, getWeekendsCount, getPayDate})
});

function getDayByDate(year, month, day) {
	var days = ['sunday', 'monday', 'tusday', 'wensday', 'thearsday', 'friday', 'saturday'];
	var date = new Date(year, month, day)
	return days[date.getDay()];
}
console.log(getDayByDate(1984, 07, 14));

function isYearLeap(year) {
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
console.log(isYearLeap(2018));

function getWeekendsCount(year, month) {
	var weekendDayCount = 0;
var days = new Date(year, month, 0).getDate();
	
	for (var i = 1; i < days; i++) {
	
	 var mon = new Date(year, month, i)
	if (mon.getDay() === 0 || mon.getDay() === 6 ){
		weekendDayCount ++;
	}
}

	return weekendDayCount;
}
console.log(getWeekendsCount(2013, 05));