$(document).ready(function() {
    var sentence = prompt("Enter a sentence");
    var firstCharacter = sentence.charAt(0);
    var lastCharacter = sentence[sentence.length-1];
    alert(firstCharacter.toUpperCase() + lastCharacter.toUpperCase());
    var sum1 = firstCharacter.toUpperCase() + lastCharacter.toUpperCase();
    var sum2 = (lastCharacter.toUpperCase() + firstCharacter.toUpperCase());
    alert(sum2)

});

// $(document).ready(function() {
//     var sentence = prompt("Enter a sentence");
//     var firstCharacter = sentence.charAt(0);
//     var lastCharacter = sentence[sentence.length-1];
//     alert(firstCharacter.toUpperCase() + lastCharacter.toUpperCase());

    
//     var jumble = function(){
    
//     };
// });


