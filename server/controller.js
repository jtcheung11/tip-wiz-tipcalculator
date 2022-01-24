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
        // let indexed = parseFloat(tipAmt[0]).toFixed(2);
            let indexed = (Math.round(tipAmt[0] * 100) / 100).toFixed(2)
        //     console.log(indexed)
            let sendStr = indexed.toString()
        res.status(200).send(sendStr)//need to access index 0 or change tipAmt to only hold 1 item max
    },

    totalSplit: (req, res) => {
        let finalBill = req.body.totalWithTip
        let splitBy = req.body.splitBy
        let intSplit = parseInt(finalBill) / parseInt(splitBy)
        let rounded =(Math.round(intSplit * 100) / 100).toFixed(2)
        // let sendStr = intSplit.toString()
        let sendStr = rounded.toString()
                res.status(200).send(sendStr)
    },

    contactUs: (req, res) => {
        contactData.push(req.body)
            res.status(200).send('New inquery added to data')

    }
}