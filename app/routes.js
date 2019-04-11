const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/name', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let hasAppointment = req.session.data['has-appointment']

  if (hasAppointment === 'yes') {
    res.redirect('/name')
  } else {
    res.redirect('/does-not-have-appointment')
  }
})

router.post('/has-appointment-is-on-time', function (req, res) {

  let personID = req.session.data['birth-year']

  if (personID === '1977') {
    res.redirect('/has-appointment-is-on-time')
  } 
  else if (personID === '1970') {
    res.redirect('/has-appointment-is-late')
  }
  else {
    res.redirect('/details-do-not-match')
  }
})


module.exports = router
