import './header.scss'
import React, {useEffect, useState} from "react";
import 'date-fns'
import {setDefaultOptions, format} from "date-fns";
import {ru} from 'date-fns/locale'
import {Switch} from "../common";

setDefaultOptions({locale: ru})

export const Header = () => {

    const [currentTime, setCurrentTime] = useState('')
    // const currentDate = new Date()

    const dateFormat = (time) => {
        return setCurrentTime(format(time, 'dd MMMM, p'))
    }

    useEffect(() => {
        dateFormat(new Date())
        const interval = setInterval(() => dateFormat(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div className={'header'}>
            <div className={'container'}>
                <div className={'header-menu'}>
                    <div className={'header-menu-content'}>
                        <div className={'header-menu-content-left'}>
                            <button className={'header-menu-content-left-button'}/>
                            <div className={'header-menu-content-left-logo'}>Музей Тургенева</div>
                        </div>
                        <div className={'header-menu-content-center'}>
                            <div className={'header-menu-content-center-date'}>{currentTime}</div>
                        </div>
                        <div className={'header-menu-content-right'}>
                            <div className={'header-menu-content-right-good'}>Добрые новости</div>
                                <Switch/>
                            <div className={'header-menu-content-right-login'}>Войти</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}