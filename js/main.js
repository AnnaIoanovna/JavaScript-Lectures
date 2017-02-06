// var regExp = / \w/gim;
// var regExp = new regExp("\w", "gim");

var phoneRegExp = /\+\d{1,2}[^]\d{3}[^](\d{3}-\d{2}-\d{2})/;
var phoneSrting = "rgidflkj +35(567)456-45-67 ilgfhjdflkjdkh";
console.log(phoneSrting.match(phoneRegExp)); 

var emailRegExp = /[^ ]+(@)[^ ]+?\.[^ ]+/g;
var emailsStr = "gjdfg@jhjk.hjk hnbm,hj klhuyyjhg@jhjgh.jhgy ghg@jh @ jhhj"
console.log(emailsStr.match(emailRegExp));

console.log(emailsStr.replace(emailRegExp, "oops $1"));

var flagsRegExp = /^cat$/mg;
var flagsString = "cat@cat.test\nghjhcat.rat/\ngjb.cat";
var flagsString2 = "cat\ncat\ncat";
console.log(flagsString.match(flagsRegExp));
console.log(flagsString2.match(flagsRegExp));

var lookahad = /cat(?=@)/m;
console.log(flagsString.match(lookahad));