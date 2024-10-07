import { bucket } from "./storage";

export const api = new sst.aws.ApiGatewayV2("API");

api.route("GET /", {
    link: [bucket],
    handler: "packages/functions/src/api.handler"
});
