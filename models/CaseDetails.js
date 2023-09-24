const mongoose = require('mongoose');


const CaseDetailsSchema = new mongoose.Schema
(
    {
        client_id: {
            type: Object(),
            required: true
        },


        isResolved: {
            type: String,
            default: "N"
        },


        lawyer_id: {
            type: Object()
        },

        judge_id: {
            type: Object(),
            default: mongoose.Types.ObjectId('650fa82fe7d9c93560dd8d5e')
            // default: mongoose.ObjectId("650fa82fe7d9c93560dd8d5e")
        },

        isLawyerAssigned: {
            type: String,
            default: "Y"
        },
        isCaseAccepted: {
            type: String,
            default: "TBD"
        },


        court_case_no: {
            type: String
        },


        case_type: {
            type: String
        },
        case_name: {
            type: String,
            required: true
        },
        case_descp: {
            type: String,
            required: true
        },


        court_type: {
            type: String
        },
        h_date: {
            type: Date
        }
    }
);


const CaseDetails = mongoose.model('CaseDetails', CaseDetailsSchema);

module.exports = CaseDetails;