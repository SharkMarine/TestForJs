// KMP字符串匹配算法
var getNext = function(str) {
	var next = [];
	var i = 0;
	var j = -1;
	next[0] = -1;
	while (i < str.length) {
		if (j == -1 || str[i] == str[j]) {
			i++;
			j++;
			//next[i] = j;
			// 改进后的算法
			if (str[i] != str[j]) {
				next[i] = j;
			} else {
				next[i] = next[j];
			}
		} else {
			j = next[j];
		}
	}
	return next;
}

var calculate = function(sourceStr, targetStr) {
	var next = getNext(targetStr);
	var i = 0;
	var j = 0;
	while (i < sourceStr.length && j < targetStr.length) {
		if (j == -1 || sourceStr[i] == targetStr[j]) {
			i++;
			j++;
		} else {
			j = next[j];
		}

	}
	if (j == targetStr.length) {
		return i - j;
	}
	return -1;
}
var sourceString = "abcdsfakdfjl";
var findString = "akdfk";
var finalResult = calculate(sourceString, findString);
console.log('finalResult:' + finalResult)