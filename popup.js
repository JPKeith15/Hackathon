// Initialize button with user's preferred color
let changeText = document.getElementById("changeText");


// When the button is clicked, inject ubbiDubbify into current page. When this is clicked it will start changing text
changeText.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: ubbiDubbify
  });
});

// The body of this function will be executed as a content script inside the
// current page
// update this function to what we want the extension to do

function ubbiDubbify() {
  const arrayOfNodes = document.querySelectorAll('p');
  console.log(arrayOfNodes);
  for(let i = 0; i < arrayOfNodes.length; i++){
    console.log(arrayOfNodes[i].innerText);
    let output = arrayOfNodes[i].innerText;
    let ubString = '';
    let ub = 'ub';
    let prevLetter;
    for(let j = 0; j < output.length; j++){
    let currLetter = output[j];
    if (currLetter == 'a' || currLetter == 'e' || currLetter == 'i' || currLetter == 'o' || currLetter == 'u' ) {
      if (prevLetter == 'a' || prevLetter == 'e' || prevLetter == 'i' || prevLetter == 'o' || prevLetter == 'u' ){
        prevLetter = currLetter;
        ubString = ubString + currLetter;
        continue;
        }
      ubString = ubString + ub;
      ubString = ubString + currLetter;
      prevLetter = currLetter;
      }else{
        ubString = ubString + currLetter;
        prevLetter = currLetter;
      }
    };
    console.log(ubString);
    arrayOfNodes[i].innerText = ubString;
  }
}


// let ubString = '';
// let ub = 'ub';
// // if it's a vowel
// for(let i = 0; i < output.length; i++){
//   let currLetter = output[i];
//   let prevLetter;
//   if (currLetter == 'a' || currLetter == 'e' || currLetter == 'i' || currLetter == 'o' || currLetter == 'u' ) {
//     if (prevLetter == 'a' || prevLetter == 'e' || prevLetter == 'i' || prevLetter == 'o' || prevLetter == 'u' ){
//       prevLetter = currLetter;
//       continue;
//     }
//     ubString = ubString + ub;
//     ubString = ubString + currLetter;
//     prevLetter = currLetter;
//   }
  
// };
// then we concat ub before current vowel, then push vowel
// if next letter is also a vowel, skip the ub, else continue until next vowel or end of word






// Good day → "Gubood dubay"
// Speak → "spubeak"  /ˈspʌbiːk/
// Hello → "hubellubo"  /ˌhʌbəˈlʌboʊ/
// Extra → "ubextruba"  /ˈʌbɛksˌtrʌbə/
// Hubba Bubba bubblegum → "Hububbuba Bububbuba bubububblegubum"
// Mississippi → "Mubissubissubippubi"
// Ubbi Dubbi → "Ububbubi Dububbubi"
// Zoom → "Zuboom"
// Subaru → "Subububarubu"
// "Hi, how are you?" → "Hubi, hubow ubare yubou?"
// "We need to get to Plantation Road on time." → "Wube nubeed tuboo gubet tuboo Plubantubashubon Ruboad ubon tubime."



// HOW TO SELECT ALL HEADERS
// var tags = [ "h1","h2","h3" ];
// var all_headings = [];

// for(var i = 0; i < tags.length; i++)
//     all_headings = all_headings.concat(document.getElementsByTagName(tags[i]));

//////////////////

// for (i=1; i<=6; i++) {
//   var headers = document.getElementsByTagName('h'+i);
//   for (j=0; j<headers.length; j++) {
//       headers[j].className = 'h';
//   }
// }
// var headers = document.getElementsByClassName('h');
// for (i=0; i<headers.length; i++) {
//   headers[i].innerHTML += ' '+i;
// }