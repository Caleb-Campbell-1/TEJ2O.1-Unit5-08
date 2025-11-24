/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Nov 2025
 * This program make a 28BYJ-48 DC 5V stepper motor move
 * Also, using the new standard of using a while (true) statement
*/

// setup
basic.showIcon(IconNames.Happy)

// variable
let distanceToObject: number = 0

    // move car forwards and backwards
    basic.showIcon(IconNames.Heart)
    distanceToObject = 0
    // loop forever
    basic.forever(function () {

        distanceToObject = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters)
        // car moves forward
        robotbit.StpCarMove(10, 48)
        basic.showNumber(distanceToObject)
        // when there is an object within 10 cm, the motor stops and moves in reverse 10 cm, then it turns 90 degrees and continues mocing forward.
        if ((distanceToObject) <= (10)) {
        basic.pause(500)
        robotbit.StpCarMove(-10, 48)
        robotbit.StepperTurn(robotbit.Steppers.M1, 90)
        robotbit.StepperTurn(robotbit.Steppers.M2, 90)
        basic.pause(500)
        } else {

        robotbit.StpCarMove(10, 48)
        basic.showIcon(IconNames.Happy)
    }
    })





