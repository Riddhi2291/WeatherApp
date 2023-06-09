import axios from 'axios';
import Api from '.';
import {appId} from '../helper/appConstant'

export function weather(data = {}, config = {}) {
  return {
    request: () => Api.get(`/data/2.5/find?lat=43.0538143&lon=-79.252844&cnt=50&appid=${appId}&units=metric`),
    cancel: (msg) => source.cancel(msg),
  };
}

