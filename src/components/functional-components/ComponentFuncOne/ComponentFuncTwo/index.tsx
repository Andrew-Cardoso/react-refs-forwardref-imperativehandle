import {forwardRef, useImperativeHandle} from 'react';

export interface FuncTwoImperativeHandle {
	printComponent(): void;
}

export const FuncTwo = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		printComponent() {
			console.log('Component Functional Two');
		},
	}));

	return <h2>Functional Component Two</h2>;
});
