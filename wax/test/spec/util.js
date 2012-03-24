describe('util', function() {
  it('should be able to recognize strings', function() {
      expect(wax.util.isString('Tom')).toEqual(true);
      expect(wax.util.isString(2)).toEqual(false);
  });

  it('should be able to recognize arrays', function() {
      expect(wax.util.isArray('Tom')).toEqual(false);
      expect(wax.util.isArray([2])).toEqual(true);
  });

  it('should be able to get keys', function() {
      expect(wax.util.keys({a: 2})).toEqual(['a']);
      expect(wax.util.keys({})).toEqual([]);
  });
});
