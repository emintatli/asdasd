import { CSSProperties, FC, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import CustomComponent from './Components/CustomComponent'
import ImageComponent from './Components/ImageComponent'
import TextComponent, { ColorType } from './Components/TextComponent'

const style: CSSProperties = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}
type ItemName = 'text' | 'image' | 'custom'
interface Item {
    name: ItemName
    value: string
    onClick: Function
    color: ColorType
    size: number
}

export const Board = () => {
    const [itemList, setItemlist] = useState<any>([])

    useEffect(() => {
        console.log(itemList)
    }, [itemList])

    const addNewItem = (item: any) => {
        setItemlist((prevItem: any) => [...prevItem, item])
    }
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',

        drop: () => ({ name: 'Board' }),
        collect: (monitor) => {
            if (monitor.didDrop()) {
                addNewItem(monitor.getItem())
            }

            // addNewItem();
            return {
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }
        },
    }))

    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return (
        <div
            ref={drop}
            style={{ ...style, backgroundColor }}
            data-testid="dustbin"
        >
            {isActive ? 'Release to drop' : 'Drag a box here'}

            {itemList
                ? itemList.map((item: Item) => {
                      switch (item.name) {
                          case 'text':
                              return (
                                  <TextComponent
                                      color={item.color}
                                      text={item.value}
                                  />
                              )
                          case 'custom':
                              return <CustomComponent />
                          case 'image':
                              return (
                                  <ImageComponent
                                      size={item.size}
                                      value={item.value}
                                  />
                              )
                      }
                  })
                : null}
        </div>
    )
}
