import './switch.scss'
import {useRef} from "react";

export const Switch = ({onToggle = false}) => {
    const ref = useRef()

    return (
        <div className={'switch'}>
            <input
                ref={ref}
                id={'switch'}
                className={'switch-checkbox'}
                type={'checkbox'}
            />
            <label className={'switch-label'}
                   htmlFor={'switch'}
            >
                <span className={'button'}/>
            </label>
        </div>
    )
}