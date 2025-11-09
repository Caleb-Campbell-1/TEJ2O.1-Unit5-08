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


// loop forever
while (true) {
   

    if (input.buttonIsPressed(Button.A) == true) {
        // move car forwards and backwards
        basic.showIcon(IconNames.Triangle)
        distanceToObject = 0
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
    //    robotbit.StepperDegree(robotbit.Steppers.M1, 512)
      //  robotbit.StepperDegree(robotbit.Steppers.M2, 512)
        basic.pause(500)

        robotbit.StpCarMove(10, 48)
        basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Heart)
        }
    
   

}}