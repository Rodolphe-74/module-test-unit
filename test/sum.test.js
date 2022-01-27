// Add the unit tests of the sum function here
import {sum} from "../src/sum";

describe('test complet',() => {

  it('couvre si ce sont des nombres', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('couvre si ce ne sont pas des nombres', () => {
    expect(sum('coucou', 4)).toBe('One or both args are not numbers');
  });

});


