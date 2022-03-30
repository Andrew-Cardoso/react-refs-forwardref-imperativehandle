import {useEffect, useRef} from 'react';
import {FuncInput} from './ComponentFuncInput';
import {FuncTwo, FuncTwoImperativeHandle} from './ComponentFuncTwo';

export const FuncOne = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const funcTwoRef = useRef<FuncTwoImperativeHandle>(null);

	useEffect(() => {
		inputRef?.current?.focus();
		funcTwoRef?.current?.printComponent();
	}, []);

	return (
		<div>
			<h1>Functional component</h1>
			<FuncTwo ref={funcTwoRef} />
			<FuncInput ref={inputRef} />
		</div>
	);
};
