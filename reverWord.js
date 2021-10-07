/**
 * Given a string that contains words seperated by digits(0-9). Reverse words in place
 * Eg: asd1fa -> dsa1af
**/


/**
 * Algorithm
 * Step 1 - Write function reverseWords whcih will take one string as parameter
 * Step 2 - Initalize a empty string (say reverse)
 * Step 3 - Intialze a string (inputString) to parameter (str)
 * Step 4 - split str by digits and strore in array [split(/(\d+)/) where (\d+) will match the digits in our string]
 * Step 5 - Store even element and odd elements of strArray to evenArray and oddArray respectively using for loop
 * Step 5.1 - Where even array is reversed of strArray elements
 * Step 6 - End For loop
 * Step 7 - Update result value with evenArray and oddArray using for loop
 * Step 8 - Concat array (even or odd) with max length's last element to result
 * Step 9 - Return result
**/ 
const reverseWords = (str) => {
    var result = "";
    var inputString = str;
    var strArray = inputString.split(/(\d+)/);
    let evenArray =[];
    let oddArray =[];

    for(var i=0;i<strArray.length;i++){
        if (i%2==0){
            // const temp = strArray[i].split("")
            evenArray.push(strArray[i].split("").reverse().join().replaceAll(",",""));
        }
        else{
            oddArray.push(strArray[i]);
        }
    }

    let min = findMinLength(evenArray.length,oddArray.length);
    for (var i=0;i<min;i++){
        result += evenArray[i]+""+oddArray[i];
    }
    if(min==evenArray.length){
        result += oddArray[oddArray.length-1];
    }
    else{
        result += evenArray[evenArray.length-1];
    }

    // console.log("inputString :"+inputString);
    // console.log(strArray);
    // console.log(oddArray);
    // console.log(evenArray);
    // console.log(result);
    return result;

};

function findMinLength(len1,len2){
    if(len1>len2){
        return len2;
    }
    return len1;
}


console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f