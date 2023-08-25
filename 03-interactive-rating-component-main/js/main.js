const submitButton = document.querySelector('#submit-button');
const itemList = document.querySelector('.item-list');
const blockSection = document.querySelector('#section-block');

console.log(itemList.children[3].textContent);




// console.log(submitButton);

submitButton.addEventListener('click', () => {

    blockSection.style.display = none;

   const section = document.createElement('section');
    section.classList.add('main-section');
    section.setAttribute('id', 'thankMsg')
    // console.log(section)

    const img = document.createElement('img');
    img.src = './images/illustration-thank-you.svg';
    img.alt = 'telephone image';
    // console.log(img);

    const messageHeading = document.createElement('h3');
    messageHeading.textContent = 'Thank you!';

    const messageText = document.createElement('p');
    messageText.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!';
    // console.log(messageText);


    section.appendChild(img);
    section.appendChild(messageHeading);
    section.appendChild(messageText);
    
    
    
});

// on submit
// select each content of list
// create thank you section

/*
const section = document.createElement('section');
    section.classList.add('thankyouMsg');
    section.setAttribute('id', 'thankMsg')
    // console.log(section)

    const img = document.createElement('img');
    img.src = './images/illustration-thank-you.svg';
    img.alt = 'telephone image';
    // console.log(img);

    const messageHeading = document.createElement('h3');
    messageHeading.textContent = 'Thank you!';

    const messageText = document.createElement('p');
    messageText.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!';
    // console.log(messageText);


    section.appendChild(img);
    section.appendChild(messageHeading);
    section.appendChild(messageText);
    

    console.log(section); */