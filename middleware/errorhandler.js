const {
    NOT_FOUND,
    FORBIDDEN,
    VALIDATION_ERROR,
    UNAUTHORIZED    
} = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case VALIDATION_ERROR:
      res.json({
        title:"validation error",
        message : err.message,
        stackTrace : err.stack,
        status : statusCode
    })
      break;
      case UNAUTHORIZED:
      res.json({
        title:"unauthorized",
        message : err.message,
        stackTrace : err.stack,
        status : statusCode
    })
       break;
         case FORBIDDEN:
      res.json({
        title:"Forbidden",
        message : err.message,
        stackTrace : err.stack,
        status : statusCode
    })
       break;
         case NOT_FOUND:
      res.json({
        title:"Not found",
        message : err.message,
        stackTrace : err.stack,
        status : statusCode
    })
       break;
default:
    
  res.json({
        title:"server error",
        message : err.message,
        stackTrace : err.stack,
        status : statusCode
    })
      break;
    }
    

   
};
module.exports = errorHandler;