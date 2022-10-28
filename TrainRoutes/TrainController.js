const axios = require('axios');
const MakeBokJobDo = require('./MakeBokJobDo');
const {LIVE_STATION} = require('../config/API');

module.exports={
    OneStation : (req,res)=>{    //? 1호선임.
        res.send(req.params);
    },

    ThreeStation : (req,res)=>{    
        res.send(req.params);
    },

    FourStation : (req,res)=>{  
        res.send(req.params);
    },

    FiveStation : (req,res)=>{   
        res.send(req.params);
    },

    SixStation : (req,res)=>{    
        res.send(req.params);
    },

    SevenStation : (req,res)=>{    
        res.send(req.params);
    },

    EightStation : (req,res)=>{   
        res.send(req.params);
    },

    NineStation : (req,res)=>{   
        res.send(req.params);
    },

}