import * as DELETEBooks from '../requests/DELETEBooks.request'; 
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Deletar um Livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })      
        })
    });

    it('Criar e excluir um livro', () => {
        POSTBooks.addBooks().then((resAddBook) => {
            DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    })
});