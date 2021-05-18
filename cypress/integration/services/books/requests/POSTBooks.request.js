/// <reference types= "cypress" />

const payloadAddBook = require('../payloads/add-Books.json')

function addBooks () {
    return cy.request ({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addBooks };