const nodeCron =  require("node-cron")

// nodeCron.schedule(expression, function, options) this is how to schedulea the task of using the cron job

const job =  nodeCron.schedule(" */1 * * * *", function youNeedToExecute(){
 // Do whatever needed to perform inside here for the cron job
 console.log(new Date())
} )


  