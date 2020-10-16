/*
 * @Date: 2020-07-05 19:23:09
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 15:26:41
 */ 


/**
 * @name: handleSlot
 * @msg: 获取slot传来的节点，处理成一个字符串
 * @param {type} Object
 * @return: String
 */
export const handleSlot = slots => {
  let codes = ''
  let codesAllEnd = ''
  let codesEnd = []

  // console.log(slots)
  
  const handleComponentOptions = (cO, index) => {
    cO.forEach(v => {
      let obj = v.componentOptions ? v.componentOptions : v
      if (obj.tag) {
        codes += `&lt;${obj.tag} ${v.data && v.data.attrs && Object.keys(v.data.attrs).length !== 0 ? `v-model="${v.data.model.expression}"` : ''}
        ${obj.propsData ? Object.keys(obj.propsData).map(v => obj.propsData[v] ? `${v}="${obj.propsData[v]}"` : v).join(' ') : ''}&gt;`
        index !== undefined ? codesAllEnd = `&lt;/${obj.tag}&gt;` : codesEnd.unshift(`&lt;/${obj.tag}&gt;`)
      } 
      obj.text && (codes += obj.text)
      obj.children && handleComponentOptions(obj.children)
    })
  
    codes += codesEnd.join(' ')
    codesEnd = []
  }

  return (slots => {
    slots.default.forEach(((v, index) => {
      handleComponentOptions([v], index)
      codes += codesAllEnd
      codesAllEnd = ''
    }))
    
    return codes
  })(slots)
}
