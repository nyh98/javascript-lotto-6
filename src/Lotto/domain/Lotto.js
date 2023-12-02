import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호가 중복됩니다.');
    }
  }

  // TODO: 추가 기능 구현
  compareTo(winNumber) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (winNumber.includes(number)) {
        count++;
      }
    });

    return count;
  }

  getRank(winNumber, bonusNumber) {
    const COUNT = this.compareTo(winNumber);

    switch (COUNT) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (this.#numbers.includes(bonusNumber)) {
          return 2;
        }
        return 3;
      case 6:
        return 1;

      default:
        return null;
    }
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

export default Lotto;
