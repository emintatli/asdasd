import { Box } from './Box'
import { Board } from './Board'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <div style={{ overflow: 'hidden', clear: 'both' }}>
                        <Board />
                    </div>
                    <div style={{ overflow: 'hidden', clear: 'both' }}>
                        <Box name="text" color="white" value="asdasdas" />
                        <Box
                            name="image"
                            size={50}
                            value="https://picsum.photos/200/300"
                        />
                        <Box name="custom" />
                    </div>
                </div>
            </DndProvider>
        </>
    )
}

export default App
