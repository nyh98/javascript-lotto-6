import { Console } from '@woowacourse/mission-utils';

const INPUT_VIEW = Object.freeze({
  async buyLotto() {
    const MONEY = await Console.readLineAsync('구입금액을 입력해 주세요. \n');
    this.validateMoney(MONEY);
    return MONEY;
  },

  validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('1000단위로 입력해 주세요');
    }
  },
});
