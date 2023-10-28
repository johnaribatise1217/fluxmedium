import ensureBool from "./ensure-bool";
import ensureString from "./ensure-string";

export class Result {
  #ok
  #message
  #result
  constructor({ ok, message, result }) {
    message = message?.toString()
    ensureBool(ok);
    ensureString(message);

    this.#ok = ok
    this.#message = message
    this.#result = result
  }
  /**
   * 
   * @param {any} result 
   * @param {string?} message 
   */
  static ok(result, message) {
    return new this({
      ok: true,
      result: result,
      message: message
    })
  }
  /**
   * 
   * @param {any} result 
   * @param {string?} message 
   */
  static error(result, message) {
    return new this({
      ok: false,
      result: result,
      message: message
    })
  }
  /**
   * @return {boolean}
   */
  get notOk() {
    return this.ok !== true;
  }
  /**
   * @return {boolean}
   */
  get ok() {
    return this.#ok
  }

  /**
     * @return {string?}
     */
  get message() {
    return this.#message
  }
  /**
     * @return {any}
     */
  get result() {
    return this.#result
  }

  /**
   * 
   * @param {any} result 
   * @param {string?} fallbackMessage 
   * @returns {string?}
   */
  static getMessage(result, fallbackMessage) {
    if(result == null ) return fallbackMessage
    if( typeof result !=='object')  return fallbackMessage

    if(typeof result.message === 'string'){
      return result.message
    }

    if(typeof result.error?.message === 'string'){
      return result.error.message
    }
  }
}