 /*----- constants -----*/
 function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
   
    while (currentIndex != 0) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  
  var cards = [
        { value: 'A', image: 'css/card-library/spades/spades-A.svg'},
        { value: 'A', image: 'css/card-library/spades/spades-A.svg'},
        { value: 'K', image: 'css/card-library/spades/spades-K.svg'},
        { value: 'K', image: 'css/card-library/spades/spades-K.svg'},
        { value: 'Q', image: 'css/card-library/spades/spades-Q.svg'},
        { value: 'Q', image: 'css/card-library/spades/spades-Q.svg'},
        { value: 'J', image: 'css/card-library/spades/spades-J.svg'},
        { value: 'J', image: 'css/card-library/spades/spades-J.svg'},
        { value: '10', image: 'css/card-library/spades/spades-r10.svg'},
        { value: '10', image: 'css/card-library/spades/spades-r10.svg'},
        { value: '9', image: 'css/card-library/spades/spades-r09.svg'},
        { value: '9', image: 'css/card-library/spades/spades-r09.svg'},
  
]


var cardEls = document.querySelectorAll('.card')
var firstGuess = null

shuffle(cards)

cardEls.forEach(function (el, index) {
    console.log('this is el', el, 'this is index', index)
    el.addEventListener('click', function () {
        var clickedCard = cards[index]
        el.setAttribute('src', clickedCard.image)
        console.log('this is el', el)

        if (firstGuess === null) {
            firstGuess = index
            console.log('IF this is first guess', firstGuess)
        } else {
            console.log('ELSE this is first guess', firstGuess)
            if (cards[firstGuess].value === cards[index].value) {
                console.log('cards at first guess', cards[firstGuess].value, 'cards at index', cards[index].value)
                firstGuess = null
            } else {
                function myFunction() {
                    console.log('timeout executed')
                    console.log('the second else')
                cardEls[firstGuess].setAttribute('src', 'css/card-library/backs/blue.svg')
                cardEls[index].setAttribute('src', 'css/card-library/backs/blue.svg')
                firstGuess = null
                } setTimeout(myFunction, 3000)
                
                
                
                


                
            }
        }
        
    })
        
})        



  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/