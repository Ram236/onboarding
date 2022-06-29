import { obReducer, initiaResultState } from './ob.reducer';

describe('Ob Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = obReducer(initiaResultState, action);

      expect(result).toBe(initiaResultState);
    });
  });
});
