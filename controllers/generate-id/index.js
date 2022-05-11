import generatorService from "../../services/generator-service.js";
import { errorResMsg, successResMsg } from "../../utilities/response.js";

class SequenceGeneratorController {
  async generate(req, res) {
    try {
      const { start, machineId } = req.body;

      const generatedId = await generatorService.generate({
        start,
        machineId,
      });
      return successResMsg(res, 200, {
        message: `Sequence ID generated successfully`,
        data: generatedId,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while generating sequence ID",
      });
    }
  }
}

export default new SequenceGeneratorController();
