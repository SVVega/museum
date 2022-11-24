import './footer.scss'

export const Footer = () => {

    return (
        <div className={'footer'}>
            <div className={'footer-wrapper'}>
                <div className={'footer-content'}>
                    <div className={'footer-content-menu'}>
                        <div className={'footer-content-menu-links'}>
                            <span>Редакция</span>
                            <span>Реклама</span>
                            <span>Контакты</span>
                            <span>Пресс-релизы</span>
                            <span>Техподдержка</span>
                            <span>Спецпроекты</span>
                            <span>Вакансии</span>
                            <span>RSS</span>
                        </div>
                        <div className={'footer-content-menu-logo'}>
                            <div className={'footer-content-menu-logo-label'}>
                                Озвучка материалов
                            </div>
                            <div className={'footer-content-menu-logo-icon'}>
                                <span>ЦРТ</span> | <span>Группа компаний</span>
                            </div>
                        </div>
                    </div>
                    <div className={'footer-content-versions'}>
                        <div className={'footer-content-versions-copyright'}>
                            © 1999–2022 ООО «Лента.Ру»
                        </div>
                        <div className={'footer-content-versions-erratum'}>
                            Нашли опечатку? Нажмите
                            <span>Ctrl+Enter</span>
                        </div>
                        <div className={'footer-content-versions-limit'}>
                            18+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}