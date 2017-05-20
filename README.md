# DOM-Manipulationsv2 - Exercise set focusing on DOM Manipulations

## Lessons Learned
* grab the parent node using ***document.querySelector('insert class name or ID name here')*** - assign to a variable (ex: var pNode)
* all of that node's children can now be accessed using pNode.children
* ***parseInt(pNode.innterHTML)*** - gets you the number value in a string
* styles accessed - ***circleNode.style.background***
* get the computed styles of a variable - ***window.getComputedStyle(redCircle)***
* sometimes you must loop backwards to avoid errors...
```
document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  	var outerBox = document.querySelector('#reverse-squares .answer-box')
  	var squareNodes = outerBox.children
  	for (var i = squareNodes.length - 1;i >= 0; i--){ //reverse loop
  		outerBox.appendChild(squareNodes[i]) //append child back into parent node
  	}

})
```
* slice(start,end) - similar to substring but on the end you can define it as a negative number to say how many characters from the end of the string
