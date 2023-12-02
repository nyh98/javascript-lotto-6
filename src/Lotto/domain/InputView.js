import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async buyLotto() {
    const MONEY = Number(await Console.readLineAsync(MESSAGES.inputMoney));
    this.validateMoney(MONEY);
    return MONEY;
  },

  async winNumber() {
    const WIN_NUMBER = await Console.readLineAsync(MESSAGES.inputWinNumber);
    this.validateWinNumber(WIN_NUMBER);
    const SPLIT_NUMBER = WIN_NUMBER.split(',');
  },

  validateMoney(money) {
    const notNumber = /[^\d]/g;

    if (money % 1000 !== 0) {
      throw new Error(MESSAGES.invalidMoney);
    }

    if (notNumber.test(money)) {
      throw new Error(MESSAGES.notNumber);
    }
  },

  validateWinNumber(winNumber) {
    const validNumber =
      /^(([1-9]|[1-3][0-9]|4[0-5]),){5}([1-9]|[1-3][0-9]|4[0-5])$/g;

    if (!validNumber.test(winNumber)) {
      throw new Error(MESSAGES.invalidWinNumber);
    }
  },
});

export default INPUT_VIEW;
