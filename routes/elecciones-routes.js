let express = require('express')
let router = express.Router()
let ele = require('../controller/elecciones')

/* uso de middleware */
// router.use(mdAunt.content_type)
// router.use(mdAunt.api_key)
// router.use(mdAunt.token_validation)

/* GET home page. */
router.get('/data/:dat', ele.elecciones)





module.exports = router
