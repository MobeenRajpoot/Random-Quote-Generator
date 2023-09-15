// Variables

const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const button = document.querySelector('button');


// An Array of random quotes

const quotes = [
    {
        quote: `"When you change your thoughts, remember to also change your world."`,
        person: "Norman Vincent Peale"
    },
    {
        quote: `"Learn as if you will live forever, live like you will die tomorrow."`,
        person: "Mahatma Gandhi"
    },
    {
        quote: `"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."`,
        person: "Mark Twain"
    },
    {
        quote: `"When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out."`,
        person: "Eleanor Roosevelts"
    },
    {
        quote: `"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest."`,
        person: "Walter Anderson"
    },
    {
        quote: `"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together."`,
        person: "Diane McLaren"
    },
    {
        quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
        person: "Winston S. Churchill"
    },
    {
        quote: `"It is better to fail in originality than to succeed in imitation."`,
        person: "Herman Melville"
    }
];


// Adding Event Listener to the Button

button.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})