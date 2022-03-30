import React from 'react';

export const FuncInput = React.forwardRef<HTMLInputElement>((_, ref) => {
	return <input type='text' ref={ref} />;
});
