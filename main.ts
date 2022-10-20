import {StudentManager} from "./StudentManager";
import {Student} from "./Student";
// @ts-ignore
let studentmanager = new StudentManager()
studentmanager.add("hieuu",'c09',7,7);
studentmanager.add("hi",'c08',8,8);
studentmanager.add("hie",'c07',9,9);
studentmanager.add("hieu",'c06',6,6);

console.log(studentmanager.showList());

