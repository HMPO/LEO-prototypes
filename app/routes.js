//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/what-is-the-name-of-your-pet', function(request, response) {

    var petResponse = request.session.data['doYouHaveAPet']
    if (petResponse == "No"){
        response.redirect("/check-answers")
    } else {
        response.redirect("/what-is-the-name-of-your-pet")
    }
})


router.post('/add-on-wheels', function(request, response) {

    var carSelection = request.session.data['correctCar']
    if (carSelection == "no"){
        response.redirect("/search-car")
    } else {
        response.redirect("/add-on-wheels")
    }
})


//--------------------------------------------------------Triage routes--------------------------------------------------------
// Triage - 1st page (Are you searching for a death cert)
router.post('/round1/triage-question-1', function(request, response) {
    var triageq1 = request.session.data['certType']
    if (triageq1 == "yes"){
        response.redirect("/round1/triage-question-2")
    } else {
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    }
})

// Triage - 2nd page (was the death reg before 31 Dec 2009?)
router.post('/round1/triage-question-2', function(request, response) {
    var triageq1 = request.session.data['triage2']
    if (triageq1 == "yes"){
        response.redirect("/round1/triage-question-3")
    } 
    else if (triageq1 == "no"){
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    } 
    else {
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    }
})

// Triage - 3rd page (Do you want paper cert)
router.post('/round1/triage-question-3', function(request, response) {
    var triageq1 = request.session.data['triage3']
    if (triageq1 == "yes"){
        response.redirect("/round1/triage-question-4")
    } else {
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    }
})

// Triage - 4th page (Are you searching for 1 person)
router.post('/round1/triage-question-4', function(request, response) {
    var triageq1 = request.session.data['triage4']
    if (triageq1 == "yes"){
        response.redirect("/round1/login-or-sign-in")
    } else {
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    }
})

//--------------------------------------------------------END of Triage routes--------------------------------------------------------


//--------------------------------------------------------Place of death page--------------------------------------------------------
// Place of death checkboxes routes (place-of-death.html)
router.post('/round1/get-help/place-of-death-1', function(request, response) {
    var placeOfDeath = request.session.data['death-place']
    if (placeOfDeath == "place of death"){
        response.redirect("/round1/get-help/place-of-death-2")
    } else {
        response.redirect("/round1/get-help/address")
    }
})

//--------------------------------------------------------END Place of death page--------------------------------------------------------



//--------------------------------------------------------Question on seaarch page (do you want to add more details?)--------------------------------------------------------// Triage - 4th page (Are you searching for 1 person)
router.post('/round1/V2-basic-search', function(request, response) {
    var searchv2 = request.session.data['moreDetailsv2']
    if (searchv2 == "yes"){
        response.redirect("../../round1/advanced-search/advance-search")
    } else {
        response.redirect("../../round1/basic-search/search-results-basic")
    }
})



//--------------ROUND 2 ALPHA js--------------//
//--------------------------------------------------------Triage routes--------------------------------------------------------
// Triage - 1st page What type of certificate are you searching for?
router.post('/round2/triage-question-1', function(request, response) {
    var triageq1 = request.session.data['certTypeRound2']
    if (triageq1 == "death"){
        response.redirect("/round2/triage-question-2")
    } else {
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    }
})

// Triage - 2nd page (was the death reg before 31 Dec 2009?)
router.post('/round2/triage-question-2', function(request, response) {
    var triageq2 = request.session.data['triage2Round2']
    if (triageq2 == "yes"){
        response.redirect("/round2/triage-question-3")
    } 
    else if (triageq2 == "no"){
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    } 
    else {
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    }
})

// Triage - 3RD page delivery method
router.post('/round2/triage-question-3', function(request, response) {
    var triageq3 = request.session.data['triage3Round2']
    if (triageq3 == "standard"){
        response.redirect("/round2/triage-question-4")
    } 
    else if (triageq3 == "no"){
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    } 
})

// Triage - 4th page (Are you searching for 1 person)
router.post('/round2/triage-question-4', function(request, response) {
    var triageq4 = request.session.data['triage4Round2']
    if (triageq4 == "yes"){
        response.redirect("/round2/login/login-or-sign-in")
    } else {
        response.redirect("https://www.gro.gov.uk/gro/content/certificates/login.asp")
    }
})

// ------------------------- Place of death check boxes page (place-of-death-1.html) 
//
router.post('/round2/get-help/place-of-death-2', function(request, response) {
    var placeDeath = request.session.data['placeOfDeath'],
    lastKnownAddress = request.session.data['lastKnownAddress'];
    if (placeDeath == "placeOfDeath"){
        response.redirect("/round2/get-help/place-of-death-2")
    } 
    else if (lastKnownAddress == "lastKnownAddress"){
        response.redirect("/round2/get-help/address")
    } 
})

// Age
router.post('/round2/get-help/age', function(request, response) {
    var placeDeath = request.session.data['placeOfDeath'], 
    lastKnownAddress = request.session.data['lastKnownAddress'];
    if (lastKnownAddress == "lastKnownAddress"){
        response.redirect("/round2/get-help/address")
    } 
    else if (placeDeath == "placeOfDeath"){
        response.redirect("/round2/get-help/age")
    } 
})

// Age2
router.post('/round2/get-help/age2', function(request, response) {
    response.redirect("/round2/get-help/age")
})


// ------------------------- ROUND3 direct to ROLO page (page before users after directed to ROLO)
//
// Triage - 1st page (What type of cert are you searching for?)
router.post('/round3/triage-question-1', function(request, response) {
    var triageq1 = request.session.data['certTypeRound3']
    if (triageq1 == "death"){
        response.redirect("/round3/triage-question-2")
    } else {
        response.redirect("direct-to-rolo.html")
    }
})

// Triage - 2nd page (was the death reg before 31 Dec 2009?)
router.post('/round3/triage-question-2', function(request, response) {
    var triageq2 = request.session.data['triage2Round3']
    if (triageq2 == "yes"){
        response.redirect("/round3/triage-question-3")
    } 
    else if (triageq2 == "no"){
        response.redirect("direct-to-rolo.html")
    } 
    else {
        response.redirect("direct-to-rolo.html")
    }
})

// Triage - 3RD page delivery method
router.post('/round3/triage-question-3', function(request, response) {
    var triageq3 = request.session.data['triage3Round3']
    if (triageq3 == "standard"){
        response.redirect("/round3/triage-question-4")
    } 
    else if (triageq3 == "no"){
        response.redirect("direct-to-rolo.html")
    } 
})

// Triage - 4th page (Are you searching for 1 person)
router.post('/round3/triage-question-4', function(request, response) {
    var triageq4 = request.session.data['triage4Round3']
    if (triageq4 == "yes"){
        response.redirect("/round3/login/login-or-sign-in")
    } else {
        response.redirect("direct-to-rolo.html")
    }
})

// ------------------------- ROUND 4 direct to ROLO page (page before users after directed to ROLO)
//
// Triage - 1st page (What type of cert are you searching for?)
router.post('/round4/triage-question-1', function(request, response) {
    var triageq1 = request.session.data['certTypeRound4']
    if (triageq1 == "death"){
        response.redirect("/round4/triage-question-2")
    } else {
        response.redirect("direct-to-rolo.html")
    }
})

// Triage - 2nd page (was the death reg before 31 Dec 2009?)
router.post('/round4/triage-question-2', function(request, response) {
    var triageq2 = request.session.data['triage2Round4']
    if (triageq2 == "yes"){
        response.redirect("/round4/triage-question-3")
    } 
    else if (triageq2 == "no"){
        response.redirect("direct-to-rolo.html")
    } 
    else {
        response.redirect("direct-to-rolo.html")
    }
})

// Triage - 3RD page delivery method
router.post('/round4/triage-question-3', function(request, response) {
    var triageq3 = request.session.data['triage3Round4']
    if (triageq3 == "standard"){
        response.redirect("/round4/triage-question-4")
    } 
    else if (triageq3 == "no"){
        response.redirect("direct-to-rolo.html")
    } 
})

// Triage - 4th page (Are you searching for 1 person)
router.post('/round4/triage-question-4', function(request, response) {
    var triageq4 = request.session.data['triage4Round4']
    if (triageq4 == "yes"){
        response.redirect("/round4/login/login-or-sign-in")
    } else {
        response.redirect("direct-to-rolo.html")
    }
})

// ------------------------- ROUND 5
//
//--------------------------------------------------------Place of death page--------------------------------------------------------
// Place of death checkboxes routes for 50 year rule (place-of-death.html)

router.post('/round5/50-year-rule/place-of-death-2', function(request, response) {
    var placeDeath = request.session.data['placeOfDeath'],
    lastKnownAddress = request.session.data['lastKnownAddress'];
    if (placeDeath == "placeOfDeath"){
        response.redirect("/round5/50-year-rule/place-of-death-2")
    } 
    else if (lastKnownAddress == "lastKnownAddress"){
        response.redirect("/round5/50-year-rule/address")
    } 
})

// Age
router.post('/round5/50-year-rule/parents-names', function(request, response) {
    var placeDeath = request.session.data['placeOfDeath'], 
    lastKnownAddress = request.session.data['lastKnownAddress'];
    if (lastKnownAddress == "lastKnownAddress"){
        response.redirect("/round5/50-year-rule/address")
    } 
    else if (placeDeath == "placeOfDeath"){
        response.redirect("/round5/50-year-rule/parents-names")
    } 
})

// Age2
router.post('/round2/get-help/age2', function(request, response) {
    response.redirect("/round5/50-year-rule/parents-names")
})

//--------------------------------------------------------END Place of death page--------------------------------------------------------

//--------------------------------------------------------routing for roud 5 using branching--------------------------------------------------------
const util = require('util')

router.post('/round5/search/second-cert/50-year-rule/place-of-death-2', function(request, response) {

    var exports = request.session.data['exports']
    if (exports !== undefined && exports.includes("death")){
        response.redirect("place-of-death-2")
    } else if (exports !== undefined && exports.includes("address")) {
        response.redirect("address") 
    }

})

router.post('/round5/search/second-cert/50-year-rule/address', function(request, response) {

    var exports = request.session.data['exports']
    if (exports !== undefined && exports.includes("address", "death")) {
        response.redirect("address") 
    } else if (exports !== undefined && exports.includes("death")){
        response.redirect("parents-names")
    }
   
})




// ------------------------- most up to date link ----------------------------
// Triage - 1st page (What type of cert are you searching for?)
router.post('/most-update-LEO/triage/triage-question-1', function(request, response) {
    var triageq1 = request.session.data['certTypeRoundMD']
    if (triageq1 == "death"){
        response.redirect("/most-update-LEO/triage/triage-question-2")
    } else {
        response.redirect("/most-update-LEO/triage/direct-to-rolo.html")
    }
})

// Triage - 2nd page (was the death reg before 31 Dec 2009?)
router.post('/most-update-LEO/triage/triage-question-2', function(request, response) {
    var triageq2 = request.session.data['triage2RoundMD']
    if (triageq2 == "yes"){
        response.redirect("/most-update-LEO/triage/triage-question-3")
    } 
    else if (triageq2 == "no"){
        response.redirect("/most-update-LEO/triage/direct-to-rolo.html")
    } 
    else {
        response.redirect("/most-update-LEO/triage/direct-to-rolo.html")
    }
})

// Triage - 3RD page delivery method
router.post('/most-update-LEO/triage/triage-question-3', function(request, response) {
    var triageq3 = request.session.data['triage3RoundMD']
    if (triageq3 == "standard"){
        response.redirect("/most-update-LEO/login/login-or-sign-in")
    } 
    else if (triageq3 == "no"){
        response.redirect("/most-update-LEO/triage/direct-to-rolo.html")
    } 
})



// -------------------------MOST UP TO DATE FLOW TRIAGE ----------------------------
// ------------------------- Get help routes -------------------------
router.post('/most-update-LEO/get-help/triage/triage-question-1', function(request, response) {
    var triageq1 = request.session.data['certTypeRoundMD']
    if (triageq1 == "death"){
        response.redirect("/most-update-LEO/get-help/triage/triage-question-2")
    } else {
        response.redirect("/most-update-LEO/get-help/triage/direct-to-rolo.html")
    }
})

// Triage - 2nd page (was the death reg before 31 Dec 2009?)
router.post('/most-update-LEO/get-help/triage/triage-question-2', function(request, response) {
    var triageq2 = request.session.data['triage2RoundMD']
    if (triageq2 == "yes"){
        response.redirect("/most-update-LEO/get-help/triage/triage-question-3")
    } 
    else if (triageq2 == "no"){
        response.redirect("/most-update-LEO/get-help/triage/direct-to-rolo.html")
    } 
    else {
        response.redirect("/most-update-LEO/get-help/triage/direct-to-rolo.html")
    }
})

// Triage - 3RD page delivery method
router.post('/most-update-LEO/get-help/triage/triage-question-3', function(request, response) {
    var triageq3 = request.session.data['triage3RoundMD']
    if (triageq3 == "standard"){
        response.redirect("/most-update-LEO/get-help/login/login-or-sign-in")
    } 
    else if (triageq3 == "no"){
        response.redirect("/most-update-LEO/get-help/triage/direct-to-rolo.html")
    } 
})



// ------------------------- BETA triage round 1 ----------------------------
router.post('/beta/round1/triage/triage-question-1', function(request, response) {
    var triageq1 = request.session.data['certTypeBeta1']
    if (triageq1 == "death"){
        response.redirect("/beta/round1/triage/triage-question-2")
    } else {
        response.redirect("/beta/round1/triage/direct-to-rolo.html")
    }
})

// Triage - 2nd page (was the death reg before 31 Dec 2009?)
router.post('/beta/round1/triage/triage-question-2', function(request, response) {
    var triageq2 = request.session.data['certTypeBeta2']
    if (triageq2 == "yes"){
        response.redirect("/beta/round1/triage/triage-question-3")
    } 
    else if (triageq2 == "no"){
        response.redirect("/beta/round1/triage/direct-to-rolo.html")
    } 
    else {
        response.redirect("/beta/round1/triage/direct-to-rolo.html")
    }
})

// Triage - 3RD page delivery method
router.post('/beta/round1/triage/triage-question-3', function(request, response) {
    var triageq3 = request.session.data['certTypeBeta3']
    if (triageq3 == "standard"){
        response.redirect("/beta/round1/login/login-or-sign-in")
    } 
    else if (triageq3 == "no"){
        response.redirect("/beta/round1/triage/direct-to-rolo.html")
    } 
})


// BETA JS
//--------------------------------------------------------routing for roud 2 BETA using branching (checkboxes screen)--------------------------------------------------------

router.post('/beta/round2/get-help/place-of-death-2', function(request, response) {

    var placeOfDeath = request.session.data['placeOfDeath']
    var lastKnownAddress = request.session.data['lastKnownAddress']
    if (placeOfDeath == "placeOfDeath" ){
        response.redirect("place-of-death-2")
    } else if (lastKnownAddress == "lastKnownAddress" ) {
        response.redirect("address") 
    }

})

// Age
router.post('/beta/round2/get-help/parents-names', function(request, response) {
    var placeDeath = request.session.data['placeOfDeath'], 
    lastKnownAddress = request.session.data['lastKnownAddress'];
    if (lastKnownAddress == "lastKnownAddress"){
        response.redirect("/beta/round2/get-help/address")
    } 
    else if (placeDeath == "placeOfDeath"){
        response.redirect("/beta/round2/get-help/parents-names")
    } 
})

// Age2
router.post('/round2/get-help/address', function(request, response) {
    response.redirect("/round5/50-year-rule/parents-names")
})

