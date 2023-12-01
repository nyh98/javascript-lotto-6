import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async buyLotto() {
    const MONEY = await Console.readLineAsync(MESSAGES.buyLotto);
    this.validateMoney(MONEY);
    return MONEY;
  },

  validateMoney(money) {
    const notNumber = /[^\d]/g;

    if (money % 1000 !== 0) {
      throw new Error(MESSAGES.notOneThousand);
    }

    if (notNumber.test(money)) {
      throw new Error(MESSAGES.notNumber);
    }
  },
});

export default INPUT_VIEW;
