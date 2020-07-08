import defaults from './defaults';
import SEPA from './sepa';
import SECSEPA from './secure';
import jsap from './jsap';
import bench from "./querybench";

const client = new SEPA(defaults)
client.secure = SECSEPA
module.exports = {
  SEPA : SEPA,
  client : client,
  Jsap : jsap,
  bench : bench
}
