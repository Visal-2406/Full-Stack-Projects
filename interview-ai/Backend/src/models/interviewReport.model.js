const mongoose = require('mongoose');

/**
 * - job description schema : String
 * - resume text : String
 * - Self description : String
 * 
 * - matchScore : Number
 * 
 * - Technical questions :[{
 *                  question : "",
 *                  intention : "",
 *                  answer : ""
 *              }]
 * - Behavioral questions : [{
 *                  question : "",
 *                  intention : "",
 *                  answer : ""
 *              }]
 * - Skill gaps :[{
 *                  skill : "",
 *                  severity : {
 *                   type : String,
 *                  enum : ["low", "medium", "high"]
 *                      }
 *              }]
 * - Preparation plan : [{
 *                  day : Number,
 *                  focus : String,
 *                  tasks : [String]
 *              }]
 * 
 */

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type : String,
        required : [true, "Job description is required"]
    },
    resume: {
        type : String
    },
    selfDescription: {
        type : String
    },
    matchScore: {
        type : Number,
        min : 0,
        max : 100
    }
})