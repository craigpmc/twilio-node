/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import TwilioClient = require('./Twilio');
import V1 = require('./notify/V1');
import { CredentialListInstance } from './notify/v1/credential';
import { ServiceListInstance } from './notify/v1/service';


/**
 * Initialize notify domain
 */
declare class Notify extends Domain {
  /**
   * Initialize notify domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: TwilioClient);

  /**
   * Credential resource
   */
  readonly credentials: CredentialListInstance;
  /**
   * Service resource
   */
  readonly services: ServiceListInstance;
  readonly v1: V1;
}

export = Notify;
