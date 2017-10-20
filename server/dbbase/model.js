module.exports = {
    oldMember:{
        memeberName:{
            type: String,
            require: true
        },
        memberImg:{
            type: String,
            require: true
        },
        memberIntro:{
            type: String,
            require: true
        },
        memberJob:{
            type: String,
            require: true
        }
    },
    nowMember:{
        memeberName:{
            type: String,
            require: true
        },
        memberImg:{
            type: String,
            require: true
        },
        memberIntro:{
            type: String,
            require: true
        }
    },
    work:{
        id:{
            type: Number,
            require: true
        },
        workName:{
            type: String,
            require: true
        },
        workImg:{
            type: String,
            require: true
        },
        workIntro:{
            type: String,
            require: true
        },
        workLink:{
            type: String,
            require: true
        }
    }
}