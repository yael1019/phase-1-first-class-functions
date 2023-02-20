const receivesAFunction = cb => cb();

const returnsANamedFunction = () => function named() { return `named func` };

const returnsAnAnonymousFunction = () => () => `returns anonymous func`;