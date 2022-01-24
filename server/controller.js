let tipAmt = []
let contactData = []

module.exports = {
    totalCalc: (req, res) => {
        let bill = (req.body.billAmount) 
        let tipP = (req.body.tipPercentage)
        let tipA = (tipP/100) 
        let tipFinal = tipA * bill
                tipAmt.unshift(tipFinal) //correct 
        let finalB = parseInt(tipFinal) + parseInt(bill)
        let sendStr = finalB.toString()
                res.status(200).send(sendStr)
    },


    tipAmount:(req,res) => {
            let indexed = (Math.round(tipAmt[0] * 100) / 100).toFixed(2)
            let sendStr = indexed.toString()
        res.status(200).send(sendStr)
    },

    totalSplit: (req, res) => {
        let finalBill = req.body.totalWithTip
        let splitBy = req.body.splitBy
        let intSplit = parseInt(finalBill) / parseInt(splitBy)
        let rounded =(Math.round(intSplit * 100) / 100).toFixed(2)
        let sendStr = rounded.toString()
                res.status(200).send(sendStr)
    },

    contactUs: (req, res) => {
        console.log(req.body)
        contactData.push(req.body)
        console.log(contactData)
            res.status(200).send(req.body.value)
            console.log(req.body.value)

    }
}