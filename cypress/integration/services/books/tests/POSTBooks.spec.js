import * as POSTBooks from '../requests/POSTBooks.request';

describe('Post Books', () => {
    it('Adicionar um novo livro', () => {
        POSTBooks.addBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
            expect(response.body.title).to.eq("Harry Potter e o Prisioneiro de Azkaban")
        })
    });
});