/**
 * Created by Haider Siddiq Bilas on 27-Aug-16.
 */
import {Greetings} from "./classes/Greetings";

let greetingObj = new Greetings("Hello lolly!");

greetingObj.greet();
console.log( greetingObj.showBil());


$(document).ready(function(){
	console.log("I am inside jquery");
});
