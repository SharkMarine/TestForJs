// 从末尾查找；坏字符匹配算法
//Boyer-Moore的坏字符算法：
var fn = function(sourceString, targetString) {
	if (sourceString.length < targetString.length) {
		return -1;
	}
	var startPos = 0;
	while (true) {
		var i = startPos + targetString.length - 1;
		var moveStep = 0;
		var j = targetString.length - 1;
		while (i < sourceString.length && j >= 0) {
			if (sourceString[i] != targetString[j]) {
				moveStep = i - targetString.lastIndexOf(sourceString[i]);
				startPos += moveStep;
				i = startPos + targetString.length - 1;
				j = targetString.length - 1;
			} else {
				i--;
				j--;
			}
		}
		// 全字符匹配
		if (j < 0) {
			return startPos;
		}
		if (i >= sourceString.length) {
			return -1;
		}
	}
	return -1;
}

var sourceString = "abcdsfakdfjl";
var findString = "cdsfak";
var result = fn(sourceString, findString);
console.log("result:" + result)