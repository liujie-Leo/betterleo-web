<script>
/**
 * 重新封装的el-form-item支持原生Element-UI中el-form-item中的所有props属性
 * 主要改动为验证规则rules属性，该属性由原生接收一个数组改为接收一个对象，使用方式如下
 * el-form-item(
 *  :rules="{
 *    type:phone|email|integer|number|idCard|fourDecimal|threeDecimal|twoDecimal|integerNonVal,
 *    max,
 *    min,
 *    validator}"
 * )
 * 如果该表单为必填项，直接在el-form-item中添加required属性即可，无需在rules属性中配置参数缺失的提示信息
 * 因为表单验证会自动将表单中的label属性值拼接成提示信息，比如label属性值为M，验证提示信息为“M为必填项”,举个栗子：
 * el-form-item(label='姓名',required) 该表单如果验证失败，验证提示信息为“姓名为必填项”
 * validator为自定义表单验证，用法见Element-UI文档
 * */
import { FormItem } from 'element-ui'
import { buildRule } from '../../utils/buildRule'
export default {
  functional: true,
  props: {
    required: {
      type: [Boolean, String, Function],
      default: false
    },
    hideLabel: {
      type: Boolean,
      default: false
    },
    ruleType: {
      type: String,
      default: ''
    }
  },
  render: (h, { parent, props, data, children }) => {
    const _FormItem = FormItem
    const newRules = []
    const { ...attrs } = data.attrs || {}
    const rules = data.attrs.rules || {}

    if (props.required) {
      newRules.push({ required: true, message: `${attrs.label}为必填项` })
    }

    if (rules.validator) {
      newRules.push({ validator: rules.validator })
    }

    const { max, min } = rules

    if (max !== undefined && min !== undefined) {
      newRules.push({ message: `长度范围为${min}-${max}`, max, min, trigger: 'blur' })
    } else if (max !== undefined) {
      newRules.push({ message: `最长为${max}`, max, trigger: 'blur' })
    } else if (min !== undefined) {
      newRules.push({ message: `最短为${min}`, min, trigger: 'blur' })
    }

    for (const key in rules) {
      if (['min', 'max', 'validator'].indexOf(key) !== -1) { continue }
      newRules.push({ ...buildRule(key, rules[key]), trigger: 'blur' })
    }

    // console.log(newRules)

    data.attrs.rules = newRules

    return h(_FormItem, data, children)
  }
}
</script>
