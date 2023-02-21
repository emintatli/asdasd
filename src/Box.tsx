import { CSSProperties, FC, ReactElement, useMemo } from 'react'
import { useDrag } from 'react-dnd'
import { ColorType } from './Components/TextComponent'

const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

export interface BoxProps {
    name: string
    children?: ReactElement
    color?: ColorType
    value?: string
    size?: number
}

interface DropResult {
    name: string
}

export const Box: FC<BoxProps> = function Box({
    name,
    children,
    color,
    size,
    value,
}) {
    const selectItem = () => {
        switch (name) {
            case 'text':
                return <p>{value}</p>
            case 'image':
                return <img width={20} src={value} />
        }
    }
    const visibleTodos = useMemo(() => selectItem(), [name])

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { name, color, value, size },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                console.log(dropResult)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
            {visibleTodos}
        </div>
    )
}
