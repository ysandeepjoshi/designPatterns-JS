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
        makeDecision() {
            console.log("Thinking and  making decision");
        }
    }
    return new LordTywin;
})();

//let write concrete factory for Lannisters
let LannisterFactroy = (function () {
    class LannisterFactroy {
        getKing() {
            return new KingJoffery();
        }
        getHandOfTheKing(){
            return new  LordTywin();
        }
    }
    return LannisterFactroy;

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






