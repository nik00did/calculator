describe('Calculator Tests', () => {

    describe('insert', () => {
        const testData = [
            // {
            //     num: null,
            //     expected: '-1'
            // },
            // {
            //     num: undefined,
            //     expected: '-1'
            // },
            // {
            //     num: NaN,
            //     expected: '-1'
            // },
            // {
            //     num: 'str',
            //     expected: '-1'
            // },
            {
                num: 78,
                expected: 78
            },
        ];

        testData.forEach(data => {
            const {num, expected} = data;
            insert(num);

            const actual = insert(num);

            it(`should return ${expected} when initial arg = ${num}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

});