import LottoStore from '../src/Lotto/domain/LottoStore.js';

describe('로또 스토어 클래스 테스트', () => {
  test('입력된 금액만큼 로또를 생성하는가', () => {
    const MONEY = 5000;
    const LOTTS = LottoStore.buyLotto(MONEY);

    expect(LOTTS.length).toBe(5);
  });
});
