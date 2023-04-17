// 1. Run `npm run complexity-report`
// 2. Open report.txt
// 3. Refactor to reduce complexity

class Philosopher {
  constructor(public readonly name: string) {
    if (
      name !== 'Descartes' &&
      name !== 'Kant' &&
      name !== 'Hegel' &&
      name !== 'Nietzsche' &&
      name !== 'Husserl'
    )
      throw new Error('Philosopher not found');

    this.name = name;
  }

  getCentury(): number | null {
    if (this.name === 'Descartes' || this.name === 'Kant') return 18;

    if (this.name === 'Hegel' || this.name === 'Nietzsche') return 19;

    if (this.name === 'Husserl') return 20;

    return null;
  }

  getNationality(): string | null {
    if (this.name === 'Descartes') return 'French';

    if (
      this.name === 'Kant' ||
      this.name === 'Hegel' ||
      this.name === 'Nietzsche' ||
      this.name === 'Husserl'
    )
      return 'German';

    return null;
  }
}

export { Philosopher };
