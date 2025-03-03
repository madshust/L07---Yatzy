import { getValues } from "./app.js";

export function getResult() {
    let result = [];

    for (let i = 1; i < 7; i++) {
        result[i] = sameValuePoints(i);
    }
    result[7] = onePairPoints()
    result[8] = twoPairPoints()
    result[9] = threeSamePoints()
    result[10] = fourSamePoints()
    result[11] = fullHousePoints()
    result[12] = smallStraightPoints()
    result[13] = bigStraightPoints()
    result[14] = chancePoints()
    result[15] = yatzyPoints()

    return result;
}


function frequenzy() {
    let frequenzy = [0, 0, 0, 0, 0, 0, 0];
    let value = getValues();

    for (let i = 0; i < 5; i++) {
        frequenzy[value[i]] += 1;
    }
    return frequenzy
}


// same value Points fx hvor mange 1'er er der 
function sameValuePoints(Value) {
    return frequenzy()[Value] * Value;
}

// Return points for one pair (for the face value giving the highest points
// Return 0, if there aren't 2 dice with the same face value.
function onePairPoints() {
    let pairpoints = 0
    for (let i = 0; i < 8; i++) {
        if (frequenzy()[i] >= 2) {
            pairpoints = i * 2
        }
    }
    return pairpoints
}

//Return points for two pairs
//(for the 2 face values giving the highest points)
//Retrun 0 if there is not 2 pairs
function twoPairPoints() {
    let fre = frequenzy();
    let pairCount = 0;
    let sum = 0;

    for (let i = 1; i < fre.length; i++) {
        if (fre[i] >= 2) {
            sum += i * 2;
            pairCount++;
        }
    }

    if (pairCount == 2) {
        return sum;
    } 
    return 0;
}

//Return points for 3 of a kind.
//Return 0, if there aren't 3 dice with the same face value.
function threeSamePoints() {
    let threeSamePoints = 0;
    for (let i = 0; i < 8; i++) {
        if (frequenzy()[i] > 2) {
            threeSamePoints = i * 3;
        }
    }
    return threeSamePoints;
}

/**
   * Return points for 4 of a kind.<br/>
   * Return 0, if there aren't 4 dice with the same face value.
   */
function fourSamePoints() {
    let fourSamePoints = 0;
    for (let i = 0; i < 8; i++) {
        if (frequenzy()[i] > 3) {
            fourSamePoints = i * 4;
        }
    }
    return fourSamePoints;
}

/**
    * Return points for full house.<br/>
    * Return 0, if there aren't 3 dice with the same face value<br/>
    * and 2 other dice with the same but different face value.
    */
function fullHousePoints() {
    let pairPoints = 0;
    let threeSamePoints = 0;
    let fullHousePoints = 0;
    for (let i = 0; i < 8; i++) {
        if (frequenzy()[i] == 2) {
            pairPoints = i * 2;
        } else if (frequenzy()[i] > 2) {
            threeSamePoints = i * 3;
        }
    }
    let testOmHouse = threeSamePoints * pairPoints;
    if (testOmHouse != 0) {
        fullHousePoints = pairPoints + threeSamePoints;
    }
    return fullHousePoints;
}

/**
    * Return points for small straight.<br/>
    * Return 0, if the dice aren't showing 1,2,3,4,5.
    */
function smallStraightPoints() {
    let smallStraightPoints = 0;
    if (frequenzy()[1] == 1 && frequenzy()[2] == 1 && frequenzy()[3] == 1 && frequenzy()[4] == 1 && frequenzy()[5] == 1) {
        smallStraightPoints = 15;
    }
    return smallStraightPoints;
}

/**
   * Return points for large straight.<br/>
   * Return 0, if the dice aren't showing 2,3,4,5,6.
   */
function bigStraightPoints() {
    let bigStraightPoints = 0;
    if (frequenzy()[2] == 1 && frequenzy()[3] == 1 && frequenzy()[4] == 1 && frequenzy()[5] == 1 && frequenzy()[6] == 1) {
        bigStraightPoints = 15;
    }
    return bigStraightPoints;
}

/**
     * Return points for chance (the sum of face values).
     */
function chancePoints() {
    let chancePoints = 0;
    let values = getValues();
    for (let value of values) {
        chancePoints = chancePoints + value;
    }
    return chancePoints;
}


/**
    * Return points for yatzy (50 points).<br/>
    * Return 0, if there aren't 5 dice with the same face value.
    */
function yatzyPoints() {
    let yatzyPoints = 0;
    for (let i = 0; i < 8; i++) {
        if (frequenzy()[i] == 5) {
            yatzyPoints = 50;
        }
    }
    return yatzyPoints;
}
