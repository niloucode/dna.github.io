
var DNA = getRandomString(400);
document.getElementById('string').innerHTML = DNA;


document.addEventListener('keyup', ev => {
    var keyPressed = ev.key;
    keyPressed = keyPressed.toUpperCase();
    console.log(keyPressed);
    var RNA = translator(DNA);
    console.log(RNA);
    const firstLetterS = RNA.charAt(0).toUpperCase(); 
    if (keyPressed === firstLetterS){
        console.log("MATCHY MATCHYY!!")
        DNA = DNA.slice(1);
        document.getElementById('string').innerHTML = DNA;
    }
    }

  );

function getRandomString(length){
    const chars = "ATGC";
    let result = "";
    for (let i = 0; i < length; i++)
    {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function translator(DNA){
return DNA.replace("A", "U").replace("T", "A").replace("C", "g").replace("G", "C");

}