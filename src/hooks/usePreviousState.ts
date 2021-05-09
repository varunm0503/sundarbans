import { useEffect, useRef } from 'react';

export const usePreviousState = <Type>(stateVal: Type) => {
    const ref = useRef<Type>();
    useEffect(() => {
        ref.current = stateVal;
    });
    return ref.current;
};