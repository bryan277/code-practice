function retrieveMajor(semver) {
		return semver.charAt(0)
}

function retrieveMinor(semver) {
		return semver.charAt(2)
}

function retrievePatch(semver) {
		return semver.charAt(4)
}

console.log(retrieveMajor('6.1.9'));
console.log(retrieveMinor('6.1.9'));
console.log(retrievePatch('6.1.9'));

// 6.1.9
// retrieveMajor("6.1.9") ➞ "6"
//
// retrieveMinor("6.1.9") ➞ "1"
//
// retrievePatch("6.1.9") ➞ "9"
//
// // 2.1.0
// retrieveMajor("2.1.0") ➞ "2"
//
// retrieveMinor("2.1.0") ➞ "1"
//
// retrievePatch("2.1.0") ➞ "0"
