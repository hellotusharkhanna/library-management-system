export class IBook {
  id: string;
  isbn: string;
  title: string;
  author: string;
  language: string;
  description: string;
  publisher: string;
  picture: string;
  edition: string;
  category: string;
  isDeleted: boolean;
  isAvailable: boolean;
  issuedTo: string | undefined;

  constructor() {}

  addBook() {
    //
  }

  updateBook(id: string) {
    //
  }

  deleteBook(id: string) {
    //
  }
}
