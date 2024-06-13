"use strict";

export default class Logger {
  /**
   * Constructor for the logger class
   *
   * @param {*} prefix The prefix or name to use for when logging entries eg: [INFO] prefix: Here is the message.
   */
  constructor(prefix) {
    if (!prefix)
      throw new Error(`Prefix parameter must be supplied for logger class.`);

    this.prefix = prefix;
  }

  /**
   * Logs an info message to the console with the supplied prefix
   *
   * Example: [LOG] prefix: message
   *
   * @param {string} message The message to log
   */
  info(message) {
    console.log(this.#formatMessage(this.prefix, message));
  }

  /**
   * Logs an warning message to the console with the supplied prefix
   *
   * Example: [WARN] prefix: message
   *
   * @param {string} message The message to log
   */
  warning(message) {
    console.warn(this.#formatMessage(this.prefix, message));
  }

  /**
   * Logs an error message to the console with the supplied prefix
   *
   * Example: [ERROR] prefix: message
   *
   * @param {string} message The message to log
   */
  error(message) {
    console.error(this.#formatMessage(this.prefix, message));
  }

  /**
   * Private method for formatting the message that will be written to the console.
   *
   * @param {*} prefix The prefix of the message comes after the brackets: [ERROR] Prefix:
   * @param {*} message The message to display in the console: [ERROR] Prefix: Message
   */
  #formatMessage(prefix, message) {
    return `${prefix}: ${message}`;
  }
}
