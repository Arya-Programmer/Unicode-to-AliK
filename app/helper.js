export function convertToUnicode(str) {
    // Helper function to create regex from pattern
    const createRegex = (pattern) => new RegExp(pattern, 'g');
    for (let pattern in toUnicode) {
        if (toUnicode.hasOwnProperty(pattern)) {
            let regex = createRegex(toUnicode[pattern]);
            str = str.replace(regex, pattern);
        }
    }
    return str;
}

export function convertToAlik(str) {
    // Helper function to create regex from pattern
    const createRegex = (pattern) => new RegExp(pattern, 'g');
    for (let pattern in toAlik) {
        if (toAlik.hasOwnProperty(pattern)) {
            let regex = createRegex(toAlik[pattern]);
            str = str.replace(regex, pattern);
        }
    }
    return str;
}


// Example usage
var toAlik = {
    "ڵا": "لاَ|لاً|لآ",
    "ڵ": "لَ|لً|لأ",
    "ە": "ة|ه(?!([ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهھیێأإآثذصضطظكيىةڎۊؤ]|$))",
    "چ": "ض",
    "پ": "ث",
    "ڤ": "ظ",
    "گ": "ط",
    "ک": "ك",
    "ێ": "يَ|ىَ|یَ|آ",
    "ڕ": "رِ",
    "ۆ": "وَ|ؤ",
    "ی": "ي|ى",
    "و": "\u200Cء",
    "ژ": "ذ"
};

const toUnicode = {
    "لاَ": "ڵا",
    "لاً": "ڵا",
    "لآ": "ڵا",
    "لا": "لا",
    "لَ": "ڵ",
    "لً": "ڵ",
    "لأ": "ڵ",
    "ة": "(?!([ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهھیێأإآثذصضطظكيىةڎۊؤ]$))ە",
    "ض": "چ",
    "ث": "پ",
    "ظ": "ڤ",
    "ط": "گ",
    "ك": "ک",
    "يَ": "ێ",
    "ىَ": "ێ",
    "یَ": "ێ",
    "آ": "ێ",
    "رِ": "ڕ",
    "وَ": "ۆ",
    "ؤ": "ۆ",
    "ي": "ی",
    "ى": "ی",
    "ذ": "ژ"
};

// Example input string
const inputString = "لاَ لآ لاً لً لَ لأ ة هض ث ظ ط ك ىَ يَ یَ آ رِ ؤ وَ ي ى ء ذ";

// Replacing left to right (true)
// const resultStringLTR = replaceMultiple(inputString, replacements, true);
// console.log(resultStringLTR);

// // Replacing right to left (false)
// const resultStringRTL = replaceMultiple(inputString, replacements, false);
// console.log(resultStringRTL);
