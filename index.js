/*
 - 6 alien ship
 - There weakness are too logical and attack one at a time
 - Your strength is you have the initiative and get to attack first
 - However, you don't have targeting lasers and can only attack the aliens in order
 - After destroyed a ship, you have option to retreat
 */

/*
    hull is hitpoints. If hull = 0 ship is destroyed 
    firepower is is the amount of damage done to the hull of the target with a successful hit
    accuracy is the chance between 0 and 1 that the ship will hit its target. (chance to hit 0% - 100% )
    
*/


class SpaceShip {
    constructor(accuracy, hull, firepower){
        this.accuracy = accuracy;
        this.hull = hull;
        this.firepower = firepower;
    }

    //if randomNum <= acccuracy 0 -> 0.7 you hit, 0.8 -> 1 missed
    attack(opponent){
        let randomChance = Math.random()
        if ( randomChance <= this.accuracy ){ 
            opponent.hull -= this.firepower;
            console.log("opponent hull", opponent.hull);
            console.log("firepower", this.firepower);
           console.log("Hit")
            
        }else{
            console.log("You missed")
        }
    }
}
        
const uss = new SpaceShip(0.7,20,5);
const aliens = [];

//loop to create 6 alien ship
for(let i = 0 ; i<6 ; i++){
    const Alaccuracy = ((Math.floor(Math.random () * 3) + 6) / 10);
    const Alhull = (Math.floor(Math.random() * 4) + 3);
    const AlFirepower = (Math.floor(Math.random () * 3) + 2);
    const alien = new SpaceShip(Alaccuracy, Alhull, AlFirepower);
    aliens.push(alien);
    console.log (alien)
}


//Game attack
while(aliens.length > 0){

    console.log("uss attack aliens")
    //uss attack first
    uss.attack(aliens[0]);

    if (aliens[0].hull <= 0){
        console.log("Uss destroyed the Alien ship");

        //ask user
        const option = prompt("Do you want to retreat Y/N?")
        if (option.toLowerCase() === "n"){
            console.log("You lose the game");
            break;
        }else{
            //if attack the next ship. Remove the first alien ship
            aliens.shift()
        }

    }else{
        console.log("alien attack uss")
        //alien attack agian
        aliens[0].attack(uss)

        if(uss.hull <= 0){
            console.log("Aliens destroyed the uss ship");
            break;
        }
    }

}

if (aliens.length === 0){
    console.log("USS ship win");
}else{
    console.log("Aliens ship win")
}









