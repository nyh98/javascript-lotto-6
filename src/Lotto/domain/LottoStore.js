import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoStore {
  static generatedLottoNumber() {
    const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );

    return RANDOM_NUMBER;
  }

  static buyLotto(money) {
    const LOTTOS = [];
    for (let i = 0; i < money / 1000; i++) {
      const LOTTO = new Lotto(this.generatedLottoNumber());
      LOTTOS.push(LOTTO);
    }
    return LOTTOS;
  }
}

export default LottoStore;
