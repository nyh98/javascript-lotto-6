import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoStore {
  static generatedLottoNumber() {
    const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );

    return RANDOM_NUMBER;
  }

  static buyLotto(money) {
    const COUNT = money / 1000;
    Console.print(`${COUNT}개를 구매했습니다.`);
    const LOTTOS = [];
    for (let i = 0; i < COUNT; i++) {
      const LOTTO = new Lotto(this.generatedLottoNumber());
      LOTTO.printNumbers();
      LOTTOS.push(LOTTO);
    }
    Console.print('');
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

  static calculateRevenue(result, money) {
    let totalRevenue = 0;
    totalRevenue += result.firstplace * 2000000000;
    totalRevenue += result.secondPlace * 30000000;
    totalRevenue += result.thirdPlace * 1500000;
    totalRevenue += result.fourthPlace * 50000;
    totalRevenue += result.fifthPlace * 5000;

    const TOTAL_RETURN = ((totalRevenue / money) * 100).toFixed(1);
    return TOTAL_RETURN;
  }

  static printResult(result, money) {
    const TOTAL_RETURN = this.calculateRevenue(result, money);
    Console.print(`당첨 통계\n---`);
    Console.print(`3개 일치 (5,000원) - ${result.fifthPlace}개`);
    Console.print(`4개 일치 (50,000원) - ${result.fourthPlace}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.thirdPlace}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.secondPlace}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result.firstplace}개`);
    Console.print(`총 수익률은 ${TOTAL_RETURN}%입니다.`);
  }
}

export default LottoStore;
