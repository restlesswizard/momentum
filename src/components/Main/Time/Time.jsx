import { useRef, useEffect } from "react";

export const Time = () => {
    const timeElem = useRef(null);
    const dateElem = useRef(null);

    
    
    useEffect(() => {

        const dateElemOptions = { weekday: 'long', day: 'numeric', month: 'long' }
        
        const interval = setInterval(() => {
            if (timeElem.current && dateElem.current) {
                const now = new Date();
                timeElem.current.textContent = now.toLocaleTimeString();
                dateElem.current.textContent = now.toLocaleDateString('ru-RU', dateElemOptions).replace(/^./, match => match.toUpperCase());
            }
        }, 1000)

        return () => {
            clearInterval(interval); // На всякий случай для очистки интервала
        }

    }, [])
    
    return(
        <>
            <time className="time" ref={timeElem}></time>
            <div className="date" ref={dateElem}></div>
        </>
    )
}
