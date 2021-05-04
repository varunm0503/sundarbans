import { useEffect, useRef } from 'react';

export const usePreviousState = (stateVal: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = stateVal;
    });
    return ref.current;
};