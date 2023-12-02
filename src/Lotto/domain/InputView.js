import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async money() {
    while (true) {
      try {
        const MONEY = Number(await Console.readLineAsync(MESSAGES.inputMoney));
        this.validateMoney(MONEY);
        Console.print('');

        return MONEY;
      } catch (error) {
        Console.print(`[ERROR]${error}`);
      }
    }
  },

  async winNumber() {
    while (true) {
      try {
        const WIN_NUMBER = await Console.readLineAsync(MESSAGES.inputWinNumber);
        this.validateWinNumber(WIN_NUMBER);
        const SPLIT_NUMBER = WIN_NUMBER.split(',').map((string) =>
          Number(string)
        );
        Console.print('');

        return SPLIT_NUMBER;
      } catch (error) {
        Console.print(`[ERROR]${error}`);
      }
    }
  },

  async bonusNumber(winNumber) {
    while (true) {
      try {
        const BONUS_NUMBER = Number(
          await Console.readLineAsync(MESSAGES.inputBonusNumber)
        );
        this.validateBonusNumber(BONUS_NUMBER, winNumber);
        Console.print('');

        return BONUS_NUMBER;
      } catch (error) {
        Console.print(`[ERROR]${error}`);
      }
    }
  },

  validateMoney(money) {
    if (money % 1000 !== 0 || money <= 0) {
      throw new Error(MESSAGES.invalidMoney);
    }
  },

  validateWinNumber(winNumber) {
    const validNumber =
      /^(([1-9]|[1-3][0-9]|4[0-5]),){5}([1-9]|[1-3][0-9]|4[0-5])$/g;

    if (!validNumber.test(winNumber)) {
      throw new Error(MESSAGES.invalidWinNumber);
    }
  },

  validateBonusNumber(bonusNumber, winNumber) {
    const validNumber = /^([1-9]|[1-3][0-9]|4[0-5])$/g;

    if (!validNumber.test(bonusNumber)) {
      throw new Error(MESSAGES.invaludBonusNumber);
    }

    if (winNumber.includes(bonusNumber)) {
      throw new Error(MESSAGES.overLappWithWinNumber);
    }
  },
});

export default INPUT_VIEW;
