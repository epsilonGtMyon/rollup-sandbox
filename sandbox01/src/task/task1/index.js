import { StringUtil } from "../../common/util/StringUtil"

function main() {
  console.log(StringUtil.isEmpty(null))
  console.log(StringUtil.isEmpty(undefined))
  console.log(StringUtil.isEmpty(""))
  console.log(StringUtil.isEmpty("a"))
}

export {
  main
}