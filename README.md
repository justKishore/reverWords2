# reverWords2
LeetCode challenge [rever word 2](https://leetcode.com/playground/LhwrauHo)

- Given a string that contains words seperated by digits(0-9). Reverse words in place
- It should only reverse the words & make sure not to touch the numbers
  - Eg: asd1fa -> dsa1af

---

## Algorithm
Step 1 - Write function reverseWords whcih will take one string as parameter

Step 2 - Initalize a empty string (say reverse)

Step 3 - Intialze a string (inputString) to parameter (str)

Step 4 - split str by digits and strore in array [split(/(\d+)/) where (\d+) will match the digits in our string]

Step 5 - Store even element and odd elements of strArray to evenArray and oddArray respectively using for loop

- Step 5.1 - Where even array is reversed of strArray elements

Step 6 - End For loop

Step 7 - Update result value with evenArray and oddArray using for loop

Step 8 - Concat array (even or odd) with max length's last element to result

Step 9 - Return result
