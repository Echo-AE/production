import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    it('should return the counter', () => {
        const counter = { value: 0 };
        const state: DeepPartial<StateSchema> = { counter };
        expect(getCounter(state as StateSchema)).toEqual(counter);
    });
});
