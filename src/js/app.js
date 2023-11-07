export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername(name) {
    const acceptQty = /^(?!.*\d{4,}).+$/;
    const acceptSymbols = /^[^(-_\d)][a-z_-\d]*[^(-_\d)]$/;
    return acceptSymbols.test(name) && acceptQty.test(name);
  }
}
//почему регулярное выражение работает в таком виде, но как только я ставлю флаг /^[^(-_\d)][a-z_-\d]*[^(-_\d)]$/i, все тесты возвращают false
