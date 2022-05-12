import generatorService from "../../services/generator-service.js";
import { errorResMsg, successResMsg } from "../../utilities/response.js";

const isDate = (date) => {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
};

const currentDate = new Date();
const timestamp = currentDate.getTime();
class SequenceGeneratorController {
  async generate(req, res) {
    try {
      const { start, machineId } = req.body;

      const validDate = isDate(start);
      if (!validDate) return errorResMsg(res, 400, { message: "Invalid Date" });

      if (+new Date(start) > timestamp)
        return errorResMsg(res, 400, {
          message: "Epoch must be less than current date",
        });

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
