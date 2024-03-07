function revealWords(word, text) {
    let wordList = word.split(', ');

    for (const wordTo of wordList) {
        text = text.replace('*'.repeat(wordTo.length), wordTo);
    }

    console.log(text);
}
//revealWords('great','softuni is ***** place for learning new programming languages');
 revealWords('fuckingg , sheet',
'softuni is ***** place for ******** new programming languages');