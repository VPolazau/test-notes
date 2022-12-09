import React from "react"

const spanWrapper = (text: string, tags: [{id: number, tag: string}], noteId: number) => {
  const _reTag = /(\#.[^\s\.\,]*)/gm // find tags
  const _re = /[^#]*/gm // without '#'
  const arr: string[] = text.split(_reTag)
  tags.map((el) => {
    const indx: number = arr.indexOf(el.tag)
    if (indx === -1)
      arr.splice(
        1,
        1,
        <strong key={`${noteId}_${el.id}`} style={{ color: 'red' }}>
          {el.tag.match(_re)?.join('')}
        </strong>
      )
    else
      arr.splice(
        indx,
        1,
        <strong key={`${noteId}_${el.id}`} style={{ color: 'red' }}>
          {el.tag.match(_re)?.join('')}
        </strong>
      )
  })

  return arr
}

export default spanWrapper