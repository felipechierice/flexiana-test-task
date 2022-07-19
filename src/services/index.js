import axios from "axios";
import { camelCase } from "lodash";

import config from "./config";
import { HTTP_METHODS } from "../constants";

const buildServiceRequests = (serviceConfig) => {
  let endPoints = {};

  for (let endPointName in serviceConfig.END_POINTS) {
    const thisEndPointConfig = serviceConfig.END_POINTS[endPointName];
    const camelCasedEndPointName = camelCase(endPointName);

    endPoints[camelCasedEndPointName] = (data, options = {}) => {
      const payloadPropName =
        thisEndPointConfig.HTTP_METHOD === HTTP_METHODS.GET ? "params" : "data";

      let url = `${serviceConfig.ROOT_URL}/${thisEndPointConfig.PATH}`;

      if (options.path) {
        for (let pathParamName in options.path) {
          url = url.replace(`:${pathParamName}`, options.path[pathParamName]);
        }
      }

      const payload = {
        method: thisEndPointConfig.HTTP_METHOD,
        url,
        [payloadPropName]: data
      };

      return axios(payload);
    };
  }

  return endPoints;
};

const buildServices = (servicesConfig) => {
  let _services = {};

  for (let serviceName in servicesConfig) {
    const thisServiceConfig = servicesConfig[serviceName];
    const camelCasedServiceName = camelCase(serviceName);

    _services[camelCasedServiceName] = buildServiceRequests(thisServiceConfig);
  }

  return _services;
};

const services = buildServices(config);

export default services;
