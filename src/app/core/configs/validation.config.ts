export class ValidationConfig {
  static readonly EMAIL = {
    PATTERN:
      /(?=^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)(?=^[\u0000-\u007F]+)(?=(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9])(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.{3})(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
    LENGTH: 47,
    ERROR_MESSAGE: 'Email is invalid',
  };
  static readonly PASSWORD = {
    PATTERN: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[^\s]{8,}$/,
    LENGTH: 60,
    ERROR_MESSAGE:
      'Requires at least one uppercase letter, one lowercase letter, one digit, and a minimum length of 8 characters.',
  };

  static readonly FIRST_NAME = {
    LENGTH: 255,
    ERROR_MESSAGE: 'Firstname is invalid',
  };

  static readonly LAST_NAME = {
    LENGTH: 255,
    ERROR_MESSAGE: 'Lastname is invalid',
  };

  static readonly PHONE_NUMBER = {
    LENGTH: 10,
    ERROR_MESSAGE: 'Phone is invalid',
    EXTENSION: '+7',
  };

  static readonly WEBSITE = {
    PATTERN: /\b\.\b/,
    ERROR_MESSAGE: 'Website is invalid',
  };
}
