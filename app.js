document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'cat',
      img: 'images/cat.png'
    },
    {
      name: 'cat',
      img: 'images/cat.png'
    },
    {
      name: 'dog',
      img: 'images/dog.png'
    },
    {
      name: 'dog',
      img: 'images/dog.png'
    },
    {
      name: 'lizard',
      img: 'images/lizard.png'
    },
    {
      name: 'lizard',
      img: 'images/lizard.png'
    },
    {
      name: 'hat',
      img: 'images/hat.png'
    },
    {
      name: 'hat',
      img: 'images/hat.png'
    },
    {
      name: 'tiger',
      img: 'images/tiger.png'
    },
    {
      name: 'tiger',
      img: 'images/tiger.png'
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.getElementById('result');
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
      let card = document.createElement(
        'img');
      card.setAttribute('src', 'images/card_back.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard)
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      console.log(cardsWon, cardsChosen, cardsChosenId)
    } else {
      cards[optionOneId].setAttribute('src', 'images/card_back.png');
      cards[optionTwoId].setAttribute('src', 'images/card_back.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = "Congratulations! You've matched all the cards!"
    }
  }


  //flip your card

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();

});

