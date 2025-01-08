"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds all possible Danish CPR numbers in the given text.
 *
 * This function uses a regular expression to match valid CPR numbers based on the following criteria:
 * - (0[1-9]|[12]\d|3[01]): Valid day (01–31).
 * - (0[1-9]|1[0-2]): Valid month (01–12).
 * - \d{2}: Two-digit year (e.g., 99 for 1999 or 23 for 2023).
 * - [-]?: An optional hyphen between `DDMMYY` and `XXXX`.
 * - \d{4}: A four-digit individual number.
 * - \b: Ensures the match starts and ends at word boundaries, preventing partial matches.
 * - /g: Global flag to find all occurrences in the text.
 *
 * Matching Process:
 * - The function uses `text.match(cprPattern)` to find all matches of CPR numbers in the input text.
 * - If no matches are found, the result of `match` is `null`. To handle this, the function returns an empty array using `|| []`.
 *
 * @param text - The input text to search for CPR numbers.
 * @returns An array of strings containing all matched CPR numbers.
 *
 * @example
 * const text = "Here are two CPR numbers: 010203-1234 and 0405061234.";
 * const cprNumbers = findCprNumbers(text);
 * console.log(cprNumbers); // Output: ['010203-1234', '0405061234']
 * @author Nikolai Sandbeck
 */
function findCprNumbers(text) {
    // CPR number pattern (handles with/without hyphen)
    var cprPattern = /\b(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[-]?\d{4}\b/g;
    return text.match(cprPattern) || [];
}
var text1 = "Invalid CPR numbers: 320199-1234 and 31 02 31 1234.";
console.log(findCprNumbers(text1)); // Output: []
var text2 = "There are no CPR numbers here.";
console.log(findCprNumbers(text2)); // Output: []
var text3 = "Mixed cases: 010203-1234, 3201991234, and 0405061234.";
console.log(findCprNumbers(text3)); // Output: ['010203-1234', '0405061234']
