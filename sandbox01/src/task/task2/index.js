import { StringUtil } from "../../common/util/StringUtil"

function main() {
  console.log(StringUtil.isNotEmpty(null))
  console.log(StringUtil.isNotEmpty(undefined))
  console.log(StringUtil.isNotEmpty(""))
  console.log(StringUtil.isNotEmpty("a"))
}

export {
  main
}