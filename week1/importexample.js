import {gp, avrg} from "./math.js";

const op = process.argv[2]

if(op == 'avrg'){
    console.log(avrg(process.argv.splice(3)))
}
else if(op == 'gp'){
    console.log(gp(process.argv[3], process.argv[4], process.argv[5]))
}
else{
    console.log("operation does not exist")
}
