// Add the unit tests of the sum function here
import {numberToText} from "../src/numberToText";

describe('Conversions',() => {
    it('conversion chiffreUnite -> lettres', () => {
        expect(numberToText(5)).toBe('cinq');
        expect(numberToText(1)).toBe('un');
        expect(numberToText(3)).toBe('trois');
        expect(numberToText(7)).toBe('sept');
        expect(numberToText(9)).toBe('neuf');
    });
    it('conversion deux chiffres -> lettres', () => {
        expect(numberToText(10)).toBe('dix');
        expect(numberToText(11)).toBe('onze');
        expect(numberToText(16)).toBe('seize');
        expect(numberToText(40)).toBe('quarante');
        expect(numberToText(93)).toBe('quatre vingt treize');
        expect(numberToText(88)).toBe('quatre vingt huit');

    });

    it('conversion trois chiffres -> lettres', () => {
        expect(numberToText(142)).toBe('cent quarante deux');
        expect(numberToText(222)).toBe('deux cent vingt deux');
        expect(numberToText(356)).toBe('trois cent cinquante six');
        expect(numberToText(356)).toBe('trois cent cinquante six');
        expect(numberToText(534)).toBe('cinq cent trente quatre');
        expect(numberToText(674)).toBe('six cent soixante quatorze');
        expect(numberToText(790)).toBe('sept cent quatre vingt dix');
        expect(numberToText(875)).toBe('huit cent soixante quinze');
        expect(numberToText(417)).toBe('quatre cent dix sept');
        expect(numberToText(912)).toBe('neuf cent douze');
    });

});


