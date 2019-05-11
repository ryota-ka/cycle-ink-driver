import { ReactSource, makeCycleReactComponent } from '@cycle/react';
import { Stream } from 'xstream';
import { render, RenderOptions } from 'ink';
import { ReactElement, createElement } from 'react';

export function makeInkDriver(options?: NodeJS.WriteStream | RenderOptions) {
    return function inkDriver(sink: Stream<ReactElement<any>>) {
        const source = new ReactSource();
        const Root = makeCycleReactComponent(() => ({ source, sink }));
        render(createElement(Root), options);
        return source;
    };
}
