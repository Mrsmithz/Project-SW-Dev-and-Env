const { createPostTitleValidation } = require'../../utils/formValidation';

test('should alert title input validate message', () => {
    const text = createPostTitleValidation("GenlnwZa007");
    expect(text).toBe('');
})
