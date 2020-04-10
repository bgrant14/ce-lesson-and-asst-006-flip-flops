# CPE 1040 - Spring 2020
```
  _           _       _   _       _       _                 _    
 | |         | |     | \ | |     | |     | |               | |   
 | |     __ _| |__   |  \| | ___ | |_ ___| |__   ___   ___ | | __
 | |    / _` | '_ \  | . ` |/ _ \| __/ _ \ '_ \ / _ \ / _ \| |/ /
 | |___| (_| | |_) | | |\  | (_) | ||  __/ |_) | (_) | (_) |   < 
 |______\__,_|_.__/  |_| \_|\___/ \__\___|_.__/ \___/ \___/|_|\_\
                                                                                                                      
```
Art acknowledgement: [taag](http://patorjk.com/software/taag/)
---

**NOTE:** 
1. This lesson & assignment [README](README.md) is _intentionally_ blank, to be used as the Lab Notebook for the study & submission. _It is a great aid for your study and the main component of your submission._
2. Read and follow the [lesson-and-assignment](lesson-and-assignment.md).
2. Refer to the [submission template](submission-template.md) for formatting expectations and examples. 
4. Refer to the [criteria and guide](criteria-and-guide.md) for the different components of your submission.
---

## Section 1: Capacitors
1. In this experiment, the capacitor is connected in series with a resistor to the 5V power source. After the capacitor receives the charge, it is disconnected from the power supply circuit and quickly moved to another circuit consisting of only the capacitor and an LED. The LED shines brightly for a few moments before it begins fading as the capacitor loses its charge.
When the capacitor is finished charging, its voltage remains at 5V. This is because the capacitor inherits the voltage of the source it was charged from.
 2. The amount of time the current read above zero while charging was approximately 8 seconds, and while discharging it was 17 seconds.
 3. On both multimeters that I have access to, the current was not able to be read using the current settings on the dial. Instead, the voltage through a 10Ω resistor was measured and converted to current using Ohm's Law. While charging the highest value read was I=76.3mV/10Ω=7.6mA, and while discharging the highest value read was I=113.2mv/10Ω=11.3mA.

## Section 2: Logic Level Converter
1. The logic level converter takes signals from a high voltage and converts them to a low voltage, or vice versa. This experiment is a proof-of-concept.
The first part shows that the 5V source of the power supply can be converted to a 3.3V signal which can in turn be read by the microbit. The code running on the microbit simply powers an LED on the built-in LED array when a digital high signal is read from pin 12.
The second part demonstrates that this process also works in the opposite direction. This code causes pin 12 to output a digital high signal when the user presses the "B" button, this is then converted to a 5V signal that powers an LED.
2. [Video Demo of 2.2.3](https://i.imgur.com/5mTvyty.mp4)
3. [Video Demo of 2.2.5](https://i.imgur.com/Oi8cfG8.mp4)

## Section 3: Clock Signal from the Microbit
1. This experiment uses the microbit with a simple program to generate a clock signal that drives the LED. In the first part, the clock frequency is set to 400ms (200ms low, and 200ms high). In the second part, the buttons on the microbit can be used to double or halve the frequency.
2. [Video Demo of 3.2.2](https://i.imgur.com/tTOPdqc.mp4)
3. [Video Demo of 3.2.3](https://i.imgur.com/ucOMod8.mp4)

## Section 4: D-Type Flip-Flop
1. In this experiment, the 74LS74 d-type flip-flop chip was tested. This chip was connected to 5V power and ground, the outputs Q and Q-prime were wired to LEDs, and the microbit clock to logic-level converter (LLC) circuit constructed in section 3 was used as the clock input for the chip. The preset and clear pins were wired to the high voltage, so that the d-input would cause the ouput to change on the rising edge of the clock pulse. I added a button to the circuit to more easily change the d-input.
2. 
![alt text](images/IMG_20200410_155458.jpg "Section 4 Circuit Diagram")

3. This shows the clock running at a slow rate to demonstrate that the ouput is only changed on the rising edge of the clock. [Video Demo of 4.2.6](https://i.imgur.com/kqopfRn.mp4)
4. This shows the clock running much faster to show that at a higher clock speed the lag between the change of the input and the outputs is imperceptible. [Video Demo of 4.2.7](https://i.imgur.com/YpNDISR.mp4)

## Section 5: Reading Flip-Flop Output with the Microbit
1. In this experiment, the microbit is used to set the clock speed, with the LED in the top left (0,0) of the pixel array representing the speed of the clock ticks. The 74LS74 chip is powered and the CLR and PRE pins are plugged into the 5V line, as in section 4. However, the LEDs from the previous experiment have been disconnected and the Q-prime output is now used as the D input which causes the output to flip to its opposite at the beggining of the next clock cycle. The Q output is connected to the LLC, which is then sent to the microbit as a 3.3V signal. The microbit reads this signal from pin 2 and uses the on-pulsed event handler to control the LED below the clock speed indicator (0,1). This LED turns on when it detects a high voltage and turns off when it detects a low voltage.
2. Section 4.1 Questions:
  * In a program, an *event* is an input that causes a subroutine in the program to execute, and an *event handler* is a function that detects the input event and ensures that the subroutine runs as a result. *Asynchronous execution* is a type of programming that causes parts of a program to execute separately from the main function.
  * The onPulsed function is similar to the onButtonPressed and onGesture functions that have been used in previous projects.
  * In this case, the event being handled is the "pulse," or the rising and falling voltage output by the flip flop.
  * The event handler is the onPulsed function, which is reading the digital pin and executing a function based on this input.
  * The events that can be specified by the event handler are a high voltage reading and a low voltage reading.
  * The second argument of onPulsed should be specified as high or low.
3. Section 4.2 Questions:
  * With this set up, the Q output of the flip flop changes at half the rate of the clock speed. On the rising edge of the clock's square wave, the output changes to its opposite and it changes back on the next rising edge.
4.
![alt text](images/IMG_20200410_155506.jpg "Section 5 Circuit Diagram")

5. [Video Demo of 5.2.4](https://i.imgur.com/rgeVcCj.mp4)

## Section 6: 3-bit Counter
1.
2. Section 5.1 Questions:
    1. A mod-n counter has 2^n possible output states. 
