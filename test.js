const obj2tbl = require('./obj2tbl');

var data  = {"key101":"v201","key102":["a201","a202"],"key103":{"key201":"v301","key202":["a301","a302"],"key203":{"key301":"v401","key302":["a401","a402"],"key303":{"key401":"v501","key402":["a501","a502"],"key403":{"key501":"v601"}}}},"key104":{"key201":["a301","a302"]},"key105":{"key201":{"key301":"v401"}}};

console.log(obj2tbl('samp',data));
