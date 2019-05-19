# cycle-ink-driver

[![npm](https://img.shields.io/npm/v/cycle-ink-driver.svg)](https://www.npmjs.com/package/cycle-ink-driver) [![CircleCI](https://circleci.com/gh/ryota-ka/cycle-ink-driver/tree/master.svg?style=shield)](https://circleci.com/gh/ryota-ka/cycle-ink-driver/tree/master)

[Ink](https://github.com/vadimdemedes/ink) driver for [Cycle.js](https://cycle.js.org/)

## Example

```typescript
/** @jsx createIncorporatedElement */

import { ReactSource } from '@cycle/react';
import { run } from '@cycle/run';
import { createIncorporatedElement, makeInkDriver } from 'cycle-ink-driver';
import { Box } from 'ink';
import TextInput from 'ink-text-input';
import { Stream } from 'xstream';

const sels = {
    name: Symbol('name'),
};

function View({ name }: { name: string }): JSX.Element {
    return (
        <Box flexDirection="column">
            <Box>
                Name: <TextInput sel={sels.name} value={name} onChange={() => {}} />
            </Box>
            {'-'.repeat(20)}
            <Box>Hello {name}</Box>
        </Box>
    );
}

function main({ react }: { react: ReactSource }): { react: Stream<JSX.Element> } {
    const name$ = react
        .select(sels.name)
        .events('change')
        .startWith('');

    const view$ = name$.map(name => View({ name }));

    return {
        react: view$,
    };
}

const drivers = {
    react: makeInkDriver(),
};

run(main, drivers);
```

![screencast](./docs/screencast.gif)
