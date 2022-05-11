import { hexToDec } from "./hexToDec.js";

export default class SequenceGenerator {
  constructor(options) {
    options = options || {};
    this.sequence = 0;
    this.machineId = (options.machineId || 1) % 1023;
    this.timeOffset = options.timeOffset || 0;
    this.lastTime = 0;
  }

  generate() {
    const time = Date.now(),
      bitwiseTime = (time - this.timeOffset).toString(2);

    //get the sequence number
    if (this.lastTime == time) {
      this.sequence++;

      if (this.sequence > 4095) {
        this.sequence = 0;

        //make system wait till time is been shifted by one millisecond
        while (Date.now() <= time) {}
      }
    } else {
      this.sequence = 0;
    }

    this.lastTime = time;

    let bitSequence = this.sequence.toString(2),
      bitMachineId = this.machineId.toString(2);

    //create sequence binary bit
    while (bitSequence.length < 12) bitSequence = "0" + bitSequence;

    while (bitMachineId.length < 10) bitMachineId = "0" + bitMachineId;

    const bitwiseId = bitwiseTime + bitMachineId + bitSequence;
    let id = "";

    for (let i = bitwiseId.length; i > 0; i -= 4) {
      id = parseInt(bitwiseId.substring(i - 4, i), 2).toString(16) + id;
    }

    return hexToDec(id);
  }
}
