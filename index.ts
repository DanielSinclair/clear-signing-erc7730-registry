import Ajv from 'ajv';
import schema from './specs/erc7730-v1.schema.json';

import rainbowRouterSchema from './registry/rainbow/calldata-RainbowRouter.json';
import rainbowSuperTokenFactorySchema from './registry/rainbow/calldata-RainbowSuperTokenFactory.json';
import socketSchema from './registry/socket/calldata-SocketGateway.json';

const ajv = new Ajv();
const validate = ajv.compile(schema);
 
function validateMetadata(metadata: any) {
  const valid = validate(metadata);
  if (!valid) {
    console.error('Validation errors:', validate.errors);
    return false;
  }
  return true;
}

console.log('Socket Gateway:', validateMetadata(socketSchema));
console.log('Rainbow Router:', validateMetadata(rainbowRouterSchema));
console.log('Rainbow SuperToken Factory:', validateMetadata(rainbowSuperTokenFactorySchema));