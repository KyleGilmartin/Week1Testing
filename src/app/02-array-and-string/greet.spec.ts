import { greet } from './greet'

describe('greet', () => {
    it('it should include the name Kyle gilmartin', () => {
        expect(greet('Kyle gilmartin')).toContain('Kyle gilmartin')
    });
});

describe('greet', () => {
    it('it should include the id S00188438', () => {
        expect(greet('S00188438')).toContain('S00188438')
    });
});