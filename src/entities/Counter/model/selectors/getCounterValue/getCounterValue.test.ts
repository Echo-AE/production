import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const counter = { value: 10 };
        const state: DeepPartial<StateSchema> = { counter };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
