import INPUT_VIEW from './Lotto/domain/InputView.js';
import LottoStore from './Lotto/domain/LottoStore.js';

class App {
  async play() {
    const MONEY = await INPUT_VIEW.money();
    const WIN_NUMBERS = await INPUT_VIEW.winNumber();
    const BONUS_NUMBER = await INPUT_VIEW.bonusNumber(WIN_NUMBERS);

    const LOTTOS = LottoStore.buyLotto(MONEY);
  }
}

export default App;
