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
var numberOfGuesses = 0
var matchedPairs = 0

shuffle(cards)

cardEls.forEach(function (el, index) {
    console.log('this is el', el, 'this is index', index)
    el.addEventListener('click', function(){
        if (numberOfGuesses >=15) {
            return
        }
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
                matchedPairs++
                if (matchedPairs ===6) {
                    document.getElementById('win-message').textContent = 'CONGRATULATIONS!!! YOU WON!!'
                }
                firstGuess = null
            } else {
                function myFunction() {
                    console.log('timeout executed')
                    console.log('the second else')
                cardEls[firstGuess].setAttribute('src', 'css/card-library/redwings.png')
                cardEls[index].setAttribute('src', 'css/card-library/redwings.png')
                firstGuess = null
                
                } setTimeout(myFunction,500)

            }
            numberOfGuesses++
            document.getElementById('guess-count').textContent = numberOfGuesses
            if (numberOfGuesses >=15) {
                const messageElement = document.getElementById('game-message')
                messageElement.textContent = 'Maximum number of Guesses Reached. GAME OVER'
                return
                console.log('Maximum number of guesses reached. Game over')
            }
        }
        
    })
        
})

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    cardEls.forEach(function (el, index) {
        el.setAttribute('src', 'css/card-library/redwings.png')

        shuffle(cards)

        firstGuess = null

        numberOfGuesses =0
        document.getElementById('guess-count').textContent = numberOfGuesses

        document.getElementById('game-message').textContent = ''
        document.getElementById('win-message').textContent = ''
})
})




 