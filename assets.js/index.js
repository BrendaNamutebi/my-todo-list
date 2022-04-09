const posts = [];

// simple form processing
const form = document.querySelector("form");
let text1 = form.text1;
let text2 = form.text2;
let text3 = form.text3;


//getting elememts by using id
 list1 = document.getElementById('id1');
 list2 = document.getElementById('id2');
 list3 = document.getElementById('id3');

 // create a new list4 element 
const node = document.createElement("list4");
// and give it some content 
const textnode = document.createTextNode("friends");
 // add the text node to the newly created list4 element(node)
node.appendChild(textnode);
// add the newly created element and its content into the DOM 
const newList = document.getElementById("id4"); 
  document.getElementById("id4").appendChild(node)
 
 

form.addEventListener('submit', (e) => {
    e.preventDefault();  // stop operations until i say so


    let to_do = {
        list1: list1.value,
        list2: list2.value,
        list3: list3.value,
        
    }

    // console.log('submited', blogBost)
    const posts = [to_do]
    console.log('submitted', posts)
})

//https://www.codegrepper.com/code-examples/whatever/createelement+parameters