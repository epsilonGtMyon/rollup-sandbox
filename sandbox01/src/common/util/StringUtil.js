class StringUtil {
  static isEmpty(value) {
    return value == null || value === "";
  }

  static isNotEmpty(value) {
    return !StringUtil.isEmpty(value)
  }
}


export {
  StringUtil
}