const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/name-separate-fields', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let hasAppointment = req.session.data['has-appointment']

  if (hasAppointment === 'yes') {
    res.redirect('/name-separate-fields')
  } else {
    res.redirect('/does-not-have-appointment')
  }
})

router.post('/has-appointment-is-on-time', function (req, res) {

  let personID = req.session.data['birth-month']

  if (personID < 5) {
    res.redirect('/has-appointment-is-on-time')
  } 
  else if (personID < 9) {
    res.redirect('/has-appointment-is-late')
  }
  else {
    res.redirect('/details-do-not-match')
  }
})


module.exports = router
