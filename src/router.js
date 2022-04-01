const express = require('express')
const PageController = require('./controllers/PageController')
const SimpleInterestFeeController = require('./controllers/SimpleInterestFeeController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const simpleInterestFeeController = new SimpleInterestFeeController()

// Routes
router.get('/', simpleInterestFeeController.renderInterestFee)
router.post('/', simpleInterestFeeController.renderCalculateInterestFee)

router.get('*', pageController.renderNotFound)

module.exports = router
