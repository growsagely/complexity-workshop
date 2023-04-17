// Single Responsibility Principle
// A class should have only one reason to change.
//
// While this adheres to the single responsibility principle, it's inherently
// flawed.

class NationalityService {
  // a real implementation would probably use a database
  getNationality(): string {
    return 'German';
  }
}

class BookService {
  // a real implementation would probably use a database
  getBooks(): string[] {
    return [
      'Critique of Judgment',
      'Critique of Practical Reason',
      'Critique of Pure Reason',
      'Groundwork of the Metaphysic of Morals',
      'Metaphysical Foundations of Natural Science',
      'The Metaphysics of Morals',
      'Observations on the Feeling of the Beautiful and Sublime',
      'The Only Possible Argument in Support of a Demonstration of the Existence of God Opus Postumum',
      'Prolegomena to Any Future Metaphysics',
      'Religion within the Bounds of Bare Reason',
      'Thoughts on the True Estimation of Living Forces',
      'Universal Natural History and Theory of the Heavens',
    ];
  }
}

class Kant {
  constructor(
    private readonly bookService: BookService,
    private readonly nationalityService: NationalityService
  ) {}

  getNationality(): string {
    return this.nationalityService.getNationality();
  }

  getBooks(): string[] {
    return this.bookService.getBooks();
  }
}

export { Kant };
