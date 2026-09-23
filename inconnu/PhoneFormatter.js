class PhoneFormatter {
  static format(input) {
    if (!input || typeof input !== 'string') {
      return null;
    }
    
    let cleaned = input.trim().replace(/[^\d+]/g, '');
    
    if (cleaned.startsWith('+')) {
      cleaned = cleaned.substring(1);
    }

    cleaned = cleaned.replace(/\+/g, '');

    if (cleaned.length === 0) {
      return null;
    }
    
    return cleaned;
  }
  
  static validate(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string') {
      return false;
    }
    
    const formatted = this.format(phoneNumber);
    
    if (formatted && formatted.length >= 7 && formatted.length <= 15) {
      return true;
    }
    
    return false;
  }
  
  static display(phoneNumber) {
    const formatted = this.format(phoneNumber);
    
    if (!formatted || !this.validate(phoneNumber)) {
      return 'Invalid';
    }
    
    return `+${formatted}`;
  }
}

module.exports = PhoneFormatter;

