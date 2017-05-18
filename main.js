
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.querySelector('#compoundInvestment') //select the node you are updating
  var number = parseInt(pNode.innerHTML) //get its value through parseInt on the innerHTML
  
  number = number * 2
  pNode.innerHTML = number //update the innerHTML of pNode on each click

})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleNode = document.querySelector('#circle-bw')

  if (circleNode.style.background === 'white'){
  	circleNode.style.background = 'black'
  }
  else {
  	circleNode.style.background = 'white'
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var redCircle = document.querySelector('.circle-red') //assign circle-red to redCircle variable
  var styleObj = window.getComputedStyle(redCircle) //assign styles on redCircle to styleObj variable
  
  var doubleHeight = parseInt(styleObj.height)*2 //create a variable that doubles height
  var doubleWidth = parseInt(styleObj.width)*2 //create a variable that doubles width

  if(parseInt(redCircle.style.height) > 320){  //parseInt because otherwise it returns a string
 	redCircle.style.height = '40px'
  	redCircle.style.width = '40px'
  }
  else{
  	redCircle.style.height = doubleHeight + 'px'
  	redCircle.style.width = doubleWidth + 'px'
  }
  	
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
	var ulNode = document.getElementById('userList')
	var liArray = ulNode.children //create 'child variable' for children of the ulNode (aka the li's)

	for (var i = liArray.length - 1; i >= 0; i --) { //iterate backwards so that .length method works as li's are removed
	      if(liArray[i].classList.contains('inactive')) {
	        ulNode.removeChild(liArray[i]) 
	      }
	  }
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  	var squares = document.querySelector('.square')
  	var squareArray = []
  	squareArray.push(squares)
  	var squareSequence = 0
  	for (var i = squareArray.length; i>=0; i--){
  		
  	}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})