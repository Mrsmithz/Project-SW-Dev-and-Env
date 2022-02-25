import { validationTitleMessage, validationTitle } from '../../utils/formValidation';

test('should title validate alert message is valid ', () => {
    const text = validationTitleMessage("GenlnwZa007");
    expect(text).toBe('');
})

test('should title validate alert message is invalid (title length shorter than 3 letters)', () => {
    const text = validationTitleMessage("kp");
    expect(text).toBe('Your title is too short!!');
})

test('should title validate alert message is invalid (title length longer than 40 letters)', () => {
    const text = validationTitleMessage("1234567890123456789012345678901234567890a");
    expect(text).toBe('Your title is too long!!');
})

test('should title validate is valid ', () => {
    const text = validationTitle("GenlnwZa007");
    expect(text).toBe(true);
})

test('should title validate is invalid (title length shorter than 3 letters)', () => {
    const text = validationTitle("kp");
    expect(text).toBe(false);
})

test('should title validate is invalid (title length longer than 40 letters)', () => {
    const text = validationTitle("1234567890123456789012345678901234567890a");
    expect(text).toBe(false);
})
