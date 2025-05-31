function findLetter(word,letter){

    for(i=0;i<word.length;i++){
        if(word[i]==letter){
            return('its here');
        }
    }
    return('is not here');
}

console.log(findLetter("Palmeiras","P"));
console.log(findLetter("Palmeiras","H"));