// var regExp = / \w/gim;
// var regExp = new regExp("\w", "gim");

// var phoneRegExp = /\+\d{1,2}[^]\d{3}[^](\d{3}-\d{2}-\d{2})/;
// var phoneSrting = "rgidflkj +35(567)456-45-67 ilgfhjdflkjdkh";
// console.log(phoneSrting.match(phoneRegExp)); 

// var emailRegExp = /[^ ]+(@)[^ ]+?\.[^ ]+/g;
// var emailsStr = "gjdfg@jhjk.hjk hnbm,hj klhuyyjhg@jhjgh.jhgy ghg@jh @ jhhj"
// console.log(emailsStr.match(emailRegExp));

// console.log(emailsStr.replace(emailRegExp, "oops $1"));

// var flagsRegExp = /^cat$/mg;
// var flagsString = "cat@cat.test\nghjhcat.rat/\ngjb.cat";
// var flagsString2 = "cat\ncat\ncat";
// console.log(flagsString.match(flagsRegExp));
// console.log(flagsString2.match(flagsRegExp));

// var lookahad = /cat(?=@)/m;
// console.log(flagsString.match(lookahad));
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var currentDate = new Date();
var date = new Date(2000, 0, 1, 0, 0, 0, 0);
console.log(date);

var date = new Date("2000-06-01T00:00:00.500z");

console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getDay());
console.log(days[date.getDay()]);
console.log(date.getTimezoneOffset());

date.setFullYear(2012);
console.log(date);
date.setMonth(7);
console.log(date);
date.setHours(20);
console.log(date);
date.setTime(500);
console.log(date);