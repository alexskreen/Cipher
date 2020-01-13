$(document).ready(function() {
    $("img.cat").click(function(){
        alert(sentence)
    
    });
    $("img.dog").click(function(){
        alert(sum5)
    
    });
    var sentence = prompt("Enter a sentence");
    var firstCharacter = sentence.charAt(0);
    var lastCharacter = sentence[sentence.length-1];
    alert(firstCharacter.toUpperCase() + lastCharacter.toUpperCase());
    var sum1 = firstCharacter.toUpperCase() + lastCharacter.toUpperCase();
    function reverseString(str) {
        return str.split("").reverse("").join("");
    }
    var sum2 = reverseString(sum1);
    alert(sum2)
    
    var sum3 = sentence + sum2
    alert(sum3)
    var sum4 = sentence.charAt(sentence.length/2);
    var sum5 = sum4 + sum3
    alert(sum5)
    function reverseString(str) {
        return str.split("").reverse("").join("");
    }
    alert(reverseString(sum5))

});
