import { readFileSync } from 'fs';
import TokenParser from '../index'
import { parseInfo } from '../parse'

describe('TokenParser', () => {
  it('should check if parseInfo() works well', () => {
    const testString = "despect.danilova.43@rambler.ru:6Km4bE76w:OTI5NjcxMTcyNzc2Mzk4ODU5.YdquHQ.yT9xoZSBHJQqkSV9bi1U7g2Uiso";
    const correctResult = {
      email: 'despect.danilova.43@rambler.ru',
      password: '6Km4bE76w',
      token: "OTI5NjcxMTcyNzc2Mzk4ODU5.YdquHQ.yT9xoZSBHJQqkSV9bi1U7g2Uiso"
    };

    const { email, password, token } = parseInfo(testString)
    expect(email).toBe(correctResult.email)
    expect(password).toBe(correctResult.password)
    expect(token).toBe(correctResult.token)
  })

  describe('getTokens()', () => {
    it('should make output file equal to check file', async () => {
      const input = `${__dirname}\\mock_input.txt`;
      const check = `${__dirname}\\mock_check.txt`;
      const ouput = `${__dirname}\\mock_output.txt`;

      try {
        await TokenParser.getTokens(input, ouput)
        expect(readFileSync(ouput)).toEqual(readFileSync(check));
      } catch (error) {
        expect(error).toBeUndefined()
      }
    })

    // it('should return string with correct result', async () => {
    //   const input = `${__dirname}\\mock_input.txt`;
    //   const ouput = `${__dirname}\\mock_output.txt`;
    //   const correctResult = `OTI5NjcxMDI3OTQ3ETEwNDMw.Ydqt0w.jfc50KsYdmWg-mKp8NS4MQdZq9I\nOTI5NjcwNDgyNTkxMTE2dDcz.Ydqtew.Ct4TqaYjbVVXRrdxuv7a-iz9vxM\nOTI5NjcxMTMzOTE2MTY4MjEy.YdquAg.Mt1rTQh8yR_9VuO770yaE_7KvSo`

    //   try {
    //     const result = await TokenParser.getTokens(input, ouput)
    //     expect(result).toEqual(correctResult);
    //   } catch (error) {
    //     expect(error).toBeUndefined()
    //   }
    // })
  })

})