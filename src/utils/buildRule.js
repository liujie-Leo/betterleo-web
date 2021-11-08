const ruleObj = {
  email: {
    type: 'email',
    message: '请输入正确的邮箱地址',
    pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  },
  integer: {
    type: 'integer',
    message: '必须为整数',
    pattern: /^\+?[1-9][0-9]*$/
  },
  number: {
    type: 'number',
    message: '必须为数字',
    pattern: /^[0-9]*$/
  },
  idCard: {
    pattern: /^[1-9]\d{5}(19[4-9]|20[0,1])\d(0[1-9]|1[0-2])([0-2][0-9]|30|31)\d{3}[\d|X|x]$/,
    message: '请输入正确的身份证号'
  },
  phone: {
    pattern: /^(\d{3,4}-?)?\d{7,8}$/,
    message: '请输入正确的电话号码'
  },
  mobile: {
    pattern: /^1[3-9][0-9]\d{8}$/,
    message: '请输入正确的手机号'
  },
  fourDecimal: {
    pattern: /^-?\d+(\.\d{1,4})?$/,
    message: '最多支持4位小数'
  },
  threeDecimal: {
    pattern: /^-?\d+(\.\d{1,3})?$/,
    message: '最多支持3位小数'
  },
  twoDecimal: {
    pattern: /^-?\d+(\.\d{1,2})?$/,
    message: '最多支持2位小数'
  },
  integerNonVal: {
    pattern: /^[+]{0,1}(\d+)$/,
    message: '必须为整数'
  }
}

export function buildRule (key, value) {
  const newRule = {}
  if (key === 'type') {
    newRule.pattern = ruleObj[value].pattern
    newRule.message = ruleObj[value].message
  }
  return newRule
}
