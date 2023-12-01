import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async buyLotto() {
    const MONEY = await Console.readLineAsync(MESSAGES.buyLotto);
    this.validateMoney(MONEY);
    return MONEY;
  },

  validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error(MESSAGES.notOneThousand);
    }
  },
});

export default INPUT_VIEW;
