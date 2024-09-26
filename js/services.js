let textsApi = 'http://localhost:3000/posts';
let index = 0;
let texts;

fetch(textsApi)
  .then(response => response.json())
  .then(data => {
    texts = data;
    changeText(); 
  });
  function changeText() {
    displayText();
    if(index < texts.length - 1) {
            index++; 
          } else {
            index = 0;
          }
  
    setTimeout(changeText, 2600);
  }
  
  function displayText() {
    document.getElementById("text").innerText = texts[index].title; 
  }
  export default changeText;



  