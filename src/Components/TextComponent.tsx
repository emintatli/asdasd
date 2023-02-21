import React from 'react'
export type ColorType = 'red' | 'white' | 'black'

type Props = {
    text: string
    color: ColorType
}

const TextComponent = ({ text, color }: Props) => {
    return <div style={{ color: color }}>{text}</div>
}

export default TextComponent
