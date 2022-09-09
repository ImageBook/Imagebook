const mongoose = require('mongoose')

const user={
    registered:Boolean,
    accountCreationDate:{
        type:Date,
        default:Date.now()
    },
    name:String,
    number:String,
    image:{
        type:String,
        default:'https://i.stack.imgur.com/l60Hf.png'
    },
    verified:{
        type:Boolean,
        default:false
    },
    trustScore:{
        type:Number,
        default:0
    },
    location:{
        longitude:Number,
        latitude:Number
    },
    dateOfBirth:String,
    gender:String,
    respects:[{
        respectLink:String,
        postedBy:String,
        cameraUsed:String,
        selectedType:String,
        url:String,
        time:{
            type:Date,
            default:Date.now()
        },
        reaction:{
            likes: {
                type:Number,
                default:0
            }
        }

    }]
}

const User = mongoose.model('Users',user)

module.exports = User;