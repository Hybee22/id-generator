import SequenceGenerator from "../utilities/sequence-generator/SequenceGenerator.js";

class GeneratorService {
  async generate(data) {
    const { start, machineId } = data;
    const timeOffset = +new Date(start);

    const sequence = new SequenceGenerator({
      timeOffset,
      machineId,
    });
    const output = sequence.generate();
    return output;
  }
}

export default new GeneratorService();
