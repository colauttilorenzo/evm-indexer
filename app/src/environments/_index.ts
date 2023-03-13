const { ENVIRONMENT } = process.env;
export const environment = require(`./${ENVIRONMENT}`);