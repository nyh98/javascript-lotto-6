import { Random } from '@woowacourse/mission-utils';

class Utility {
  static generatedRandomNumber() {
    const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(1, 45, 6);

    return RANDOM_NUMBER;
  }
}
