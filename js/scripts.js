
$(document).ready(function(){
    $('#formOne').submit(function(){
      let input = $('#userString').val(); // do not remove


      //console.log("sentense is " + input);
      var words = input.split(" ");
      //console.log("words is " + words);
      
      
      words.forEach(function(word){
        console.log("word is " + word);
       var temp = [];
        temp = processWord(word);
        console.log(temp);
      });
      


      function processWord (word) {
        var vowels = ["a", "e", "i", "o", "u"];
        var splitWord = word.split('');
        var returnedword
        var firstLetter = splitWord[0];
        var temp;
        var flag = true;
        var count = 0;

        if( $.inArray(firstLetter, vowels) !== -1)  {  //vowel
            console.log(`I am here ${word}`);
            word = word.slice(1,word.length);
            returnedword = word + "way";
        }
        else if( $.inArray(firstLetter, vowels) === -1) {  //consonant
            splitWord.forEach(function(chara) {
                if ( ($.inArray(chara, vowels) === -1) && flag === true) {
                    temp += chara;
                    count++;
                }
                else {
                    flag = false;
                }
            });
            word = word.slice(count,word.length);
            returnedword = word + temp + "ay";
        }
       
        return returnedword;
    


      }



      event.preventDefault(); 


    });
  });