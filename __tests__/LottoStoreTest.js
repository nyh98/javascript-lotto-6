import Lotto from '../src/Lotto/domain/Lotto.js';
import LottoStore from '../src/Lotto/domain/LottoStore.js';

describe('로또 스토어 클래스 테스트', () => {
  test('입력된 금액만큼 로또를 생성하는가', () => {
    const MONEY = 5000;
    const LOTTS = LottoStore.buyLotto(MONEY);

    expect(LOTTS.length).toBe(5);
  });

  test('당첨된 로또 등수들을 정확히 가지고 있는가', () => {
    const LOTTOS = [];
    LOTTOS.push(new Lotto([1, 2, 3, 4, 5, 6]));
    LOTTOS.push(new Lotto([1, 2, 3, 4, 5, 6]));
    LOTTOS.push(new Lotto([1, 2, 3, 4, 5, 7]));
    LOTTOS.push(new Lotto([1, 2, 3, 43, 44, 45]));

    const WIN_NUMBER = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;

    expect(LottoStore.getResult(LOTTOS, WIN_NUMBER, BONUS_NUMBER)).toEqual({
      firstplace: 2,
      secondPlace: 1,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 1,
    });
  });
});
