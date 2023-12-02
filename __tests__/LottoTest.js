import Lotto from '../src/Lotto/domain/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 당첨 번호와 몇개 일치하는지', () => {
    const LOTTO1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const LOTTO2 = new Lotto([1, 2, 3, 4, 5, 45]);
    const LOTTO3 = new Lotto([1, 2, 3, 4, 44, 45]);
    const LOTTO4 = new Lotto([1, 2, 3, 43, 44, 45]);
    const LOTTO5 = new Lotto([1, 2, 42, 43, 44, 45]);
    const WIN_NUMBER = [1, 2, 3, 4, 5, 6];

    expect(LOTTO1.compareTo(WIN_NUMBER)).toBe(6);
    expect(LOTTO2.compareTo(WIN_NUMBER)).toBe(5);
    expect(LOTTO3.compareTo(WIN_NUMBER)).toBe(4);
    expect(LOTTO4.compareTo(WIN_NUMBER)).toBe(3);
    expect(LOTTO5.compareTo(WIN_NUMBER)).toBe(2);
  });

  test('로또의 등수가 잘 나오는가', () => {
    const LOTTO1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const LOTTO2 = new Lotto([1, 2, 3, 4, 5, 20]);
    const LOTTO3 = new Lotto([1, 2, 3, 4, 5, 45]);
    const LOTTO4 = new Lotto([1, 2, 3, 4, 44, 45]);
    const LOTTO5 = new Lotto([1, 2, 3, 43, 44, 45]);
    const LOTTO_NOTHING = new Lotto([1, 2, 42, 43, 44, 45]);
    const WIN_NUMBER = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 20;

    expect(LOTTO1.getRank(WIN_NUMBER, BONUS_NUMBER)).toBe(1);
    expect(LOTTO2.getRank(WIN_NUMBER, BONUS_NUMBER)).toBe(2);
    expect(LOTTO3.getRank(WIN_NUMBER, BONUS_NUMBER)).toBe(3);
    expect(LOTTO4.getRank(WIN_NUMBER, BONUS_NUMBER)).toBe(4);
    expect(LOTTO5.getRank(WIN_NUMBER, BONUS_NUMBER)).toBe(5);
    expect(LOTTO_NOTHING.getRank(WIN_NUMBER, BONUS_NUMBER)).toBe(null);
  });
});
