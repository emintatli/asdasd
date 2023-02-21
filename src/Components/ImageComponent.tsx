import React from 'react'

type Props = {
    value: string
    size: number
}

const ImageComponent = ({ value, size }: Props) => {
  console.log(size)
    return (
        <div>
            <img src={value} width={size} height={size} />
        </div>
    )
}

export default ImageComponent
