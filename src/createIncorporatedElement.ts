// https://github.com/sliptype/cycle-react-pragma/blob/bcb997745310be43fd24ed02bc14408f08fb4326/src/index.ts

import { incorporate } from '@cycle/react';
import { createElement, ReactElement, ReactType } from 'react';

type PropsExtensions = {
    sel?: string | symbol;
};

export function createIncorporatedElement<P = any>(
    type: ReactType<P>,
    props: (P & PropsExtensions) | null,
    ...children: Array<string | ReactElement<any>>
): ReactElement<P> {
    if (!props || !props.sel) {
        return createElement(type, props, ...children);
    } else {
        return createElement(incorporate(type), props, ...children);
    }
}

declare global {
    namespace JSX {
        interface IntrinsicAttributes {
            sel?: string | symbol;
        }
    }
}
