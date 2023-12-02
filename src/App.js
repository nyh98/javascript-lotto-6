import { Console } from '@woowacourse/mission-utils';
import INPUT_VIEW from './Lotto/domain/InputView.js';
import Utility from './Lotto/domain/utility/utility.js';

class App {
  async play() {
    const MONEY = await INPUT_VIEW.buyLotto();
    const WIN_NUMBERS = await INPUT_VIEW.winNumber();
    const BONUS_NUMBER = await INPUT_VIEW.bonusNumber(WIN_NUMBERS);
  }
}

export default App;
