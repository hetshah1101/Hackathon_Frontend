import React, {useContext} from 'react'
import SiteContext from './SiteContext'

const Slider = () => {
    const { sections, position, setsections, setposition, handleKeyPress } = useContext(SiteContext);
    return (
        <div id="slider">
            <div id="line"></div>
            {[...Array(sections)].map((x, i) => {
                return (
                    <div
                        className={position==i ? "act elem" : "elem"}
                        key={i}
                        onClick={() => setposition(i)}
                    >
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
