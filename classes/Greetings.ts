/**
 * Created by Haider Siddiq Bilas on 27-Aug-16.
 */
import {IGreetings} from "../interfaces/IGreetings";

export class Greetings implements IGreetings{

    greetMessage:string;

    constructor( greet : string ){
        this.greetMessage = greet;
    }

    greet():void {
        alert(this.greetMessage);
    }

    showBil(): string{
        return "Bilas Siddiq";
    }
}