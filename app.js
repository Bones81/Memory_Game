document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardsArray = [
    {
      name: 'cat',
      url: 'images/cat.png'
    },
    {
      name: 'cat',
      url: 'images/cat.png'
    },
    {
      name: 'dog',
      url: 'images/dog.png'
    },
    {
      name: 'dog',
      url: 'images/dog.png'
    },
    {
      name: 'tiger',
      url: 'images/tiger.png'
    },
    {
      name: 'tiger',
      url: 'images/tiger.png'
    },
    {
      name: 'hat',
      url: 'images/hat.png'
    },
    {
      name: 'hat',
      url: 'images/hat.png'
    },
    {
      name: 'fish',
      url: 'images/fish.png'
    },
    {
      name: 'fish',
      url: 'images/fish.png'
    },
    {
      name: 'lizard',
      url: 'images/lizard.png'
    },
    {
      name: 'lizard',
      url: 'images/lizard.png'
    }
  ];

  cardsArray.sort( () => 0.5 - Math.random());

  const grid = document.getElementById('grid');
  const resultDisplay = document.getElementById('result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  
  //create a board
  function createBoard() {
    for (let i=0; i<cardsArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/card_back.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);    
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!");
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      resultDisplay.textContent = cardsWon.length;
      if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = "Congratulations! You matched all the cards!";
      }
    } else {
      cards[optionOneId].setAttribute('src', 'images/card_back.png');
      cards[optionTwoId].setAttribute('src', 'images/card_back.png');
      alert("Sorry. Try again.");
    }
    cardsChosen = [];
    cardsChosenId = [];
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].url);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }


  createBoard();

})