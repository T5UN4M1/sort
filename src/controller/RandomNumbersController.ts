import {RandomNumbersService} from "../services/RandomNumbersService";

export const RandomNumbersController = {
    randomlySortedNumbers : (req, res) => res.send(RandomNumbersService.randomlySortedNumbers(req.params.number))
};