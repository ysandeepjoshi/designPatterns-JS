//abstractFactory allows us to have method for creating kits of objects without knowing the concrete types of the objects
/* lets take example of game of thrones
the kingdom in question the ruling house changes with some degree of
frequency. In all likelihood there is a degree of battling and fighting during the
change of house but we'll ignore that for the moment. Each house will rule the
kingdom differently. Some value peace and tranquility and rule as benevolent
leaders, while others rule with an iron fist. The rule of a kingdom is too large for a
single individual so the king defers some of his decisions to a second in command
known as the hand of the king. The king is also advised on matters by a council,
which consists of some of the more savvy lords and ladies of the land

Ruling Family
    -memberName
    -memberName
    |
    |
    |------------------------King
    |                         -memberName
    |                         -memberName
    |
    |
    |------------------------ HandOfKing
    |                           -memberName
    |                           -memberName
    |
    |-------------------------Kings Council
                                -memberName
                                -memberName



since javascript is dynamic language instead of working with interfaces we will use classes directly

*/

//lets implement the King class which would be Joffery
let KingJoffery = (function () {
    class KingJoffery {
        constructor() {
        }
        makeDecision() {
            console.log("Decision made by King Joffery");
        }
        marry() {
        }
    }
    return KingJoffery;
})();

//now lets implement hand of king class

let LordTywin = (function () {
    class LordTywin {
        constructor(){
        }
        makeDecision() {
            console.log("Lord Tywin Thinking and  making decision");
        }
    }
    return LordTywin;
})();

//let write concrete factory for Lannisters
let LannisterFactory = (function () {
    class LannisterFactory {
        getKing() {
            return new KingJoffery();
        }
        getHandOfTheKing(){
            return new LordTywin();
        }
    }
    return LannisterFactory;

})();

let KingAerys = (function(){
    class KingAerys{
        constructor(){

        }
        makeDecision() {
            console.log("Decision made by King Aerys");
        }
        marry() {
        }
    }
    return KingAerys;
})();

let LordConnington = (function(){
    class LordConnington{
        constructor(){
        }
        makeDecision() {
            console.log("Lord Connington Thinking and  making decision");
        }
    }
    return LordConnington;
})();

//lets create the same for targeryen family
let TargaryenFactory = (function(){
    class TargaryenFactory{
        constructor(){

        }
        getKing(){
            return new KingAerys();
        }
        getHandOfTheKing(){
            return new LordConnington();
        }
    }
    return TargaryenFactory;
})();



//To make use of the Abstract Factory we'll first need a class that requires the use of
//some ruling family

let CourtSession = (function(){
    class CourtSession{
        constructor(abstractFactory){
            this.abstractFactory = abstractFactory;
            this.COMPLAINT_THRESHOLD = 10;
        }
        complaintPresented(complaint){
            if(complaint.severity< this.COMPLAINT_THRESHOLD){
                this.abstractFactory.getHandOfTheKing().makeDecision();
            }
            else{
                this.abstractFactory.getKing().makeDecision();
            }
        }
    }
    return CourtSession;
})();



let courtSession1 = new CourtSession(new TargaryenFactory());
courtSession1.complaintPresented({ severity: 8 });
courtSession1.complaintPresented({ severity: 12 });

let courtSession2 = new CourtSession(new LannisterFactory());
courtSession2.complaintPresented({ severity: 8 });
courtSession2.complaintPresented({ severity: 12 });



