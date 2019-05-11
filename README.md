# cycle-ink-driver

[Ink](https://github.com/vadimdemedes/ink) driver for [Cycle.js](https://cycle.js.org/)

```typescript
import { ReactSource } from '@cycle/react';
import { run } from '@cycle/run';
import { makeInkDriver } from 'cycle-ink-driver';
import InkTextInput from 'ink-text-input';
import { Stream } from 'xstream';

const sels = {
    name: Symbol('name'),
};

function main({ react }: { react: ReactSource }): { react: Stream<JSX.Element> } {
    const name$: Stream<string> = react.select(sels.name).events('change');
    const view$ = name$.map(name => <InkTextInput sel={sels.name} value={name} onChange={() => {}} />);

    return {
        react: view$,
    };
}

run(main, {
    react: makeInkDriver(),
});
```