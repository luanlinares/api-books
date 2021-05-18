import * as GETBooks from '../requests/GETBooks.request';
import * as PUTBooks from '../requests/PUTBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBooks) => {
                expect(resChangeBooks.status).to.eq(200);
            })      
        }) 
    });

    it('Criar e Alterar um livro', () =>{
        POSTBooks.addBooks().then((resAddBook) => {
            PUTBooks.changeBook(resAddBook.body.id).should((resChangeBooks) => {
                expect(resChangeBooks.status).to.eq(200);
            })
        })

    });
});