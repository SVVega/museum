import './switch.scss'
import {useEffect, useRef, useState} from "react";

export const Switch = ({onToggle = false, isHover = false}) => {
    const ref = useRef()

    const handleChange = (e) => {
        if(e.target?.checked) {
            onToggle('goodNews')
        } else {
            onToggle('allNews')
        }
    }

    return (
        <div className={'switch'}>
            <input
                ref={ref}
                id={'switch'}
                className={'switch-checkbox'}
                type={'checkbox'}
                onChange={(e) => handleChange(e)}
            />
            <label className={'switch-label'}
                   htmlFor={'switch'}
            >
                <span className={`button ${isHover ? 'hover' : ''}`}/>
            </label>
        </div>
    )
}