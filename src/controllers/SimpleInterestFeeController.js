class SimpleInterestController {
  constructor () {
    this.renderCalculateInterestFee = this.renderCalculateInterestFee.bind(this)
  }

  // Calculo del interés
  calculateInterestFee (capital, anualInterestFee, years) {
    const simpleInterestFee = capital * (anualInterestFee / 100) * years
    return simpleInterestFee
  }

  renderInterestFee (req, res) {
    res.render('simpleInterestFee')
  }

  renderCalculateInterestFee (req, res) {
    const capital = parseFloat(req.body.capital)
    const anualInterestFee = parseFloat(req.body.anualInterest)
    const years = parseFloat(req.body.years)

    res.render('simpleInterestFee', {
      capital: capital,
      anualInterest: anualInterestFee,
      years: years,
      average: this.calculateInterestFee(capital, anualInterestFee, years)
    })
  }
}

module.exports = SimpleInterestController
