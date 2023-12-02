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

  static getResult(lottos, winNumber, bonusNumber) {
    let firstplace = 0;
    let secondPlace = 0;
    let thirdPlace = 0;
    let fourthPlace = 0;
    let fifthPlace = 0;
    let nothing = 0;
    lottos.forEach((lotto) => {
      const COUNT = lotto.getRank(winNumber, bonusNumber);
      switch (COUNT) {
        case 1:
          firstplace++;
          break;
        case 2:
          secondPlace++;
          break;
        case 3:
          thirdPlace++;
          break;
        case 4:
          fourthPlace++;
          break;
        case 5:
          fifthPlace++;
          break;
        default:
          nothing++;
      }
    });
    return { firstplace, secondPlace, thirdPlace, fourthPlace, fifthPlace };
  }
}

export default LottoStore;
