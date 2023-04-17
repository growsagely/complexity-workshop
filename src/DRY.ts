// DRY = Don't Repeat Yourself
// This is a simple example of how to use inheritance to avoid repeating
// yourself.
//
// While this adheres to the DRY principle, it's inherently flawed.

class PossessorOfId {
  constructor(private readonly id: number) {}
  getId(): number {
    return this.id;
  }
}

class Epistemology extends PossessorOfId {
  isitTrue(query: string): boolean {
    // a real epistemology would do something more interesting here
    return true;
  }
}

class Philosopher extends PossessorOfId {
  majorWorks(): string[] {
    // a real philosopher would do something more interesting here
    return ['The Republic', 'The Phaedo', 'The Phaedrus'];
  }
}

export { Epistemology, Philosopher };
