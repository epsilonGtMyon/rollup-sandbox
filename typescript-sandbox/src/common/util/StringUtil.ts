class StringUtil {
  static isEmpty(value: string | null | undefined): boolean {
    return value == null || value === "";
  }

  static isNotEmpty(value: string | null | undefined): value is string {
    return !StringUtil.isEmpty(value);
  }
}

export { StringUtil };
