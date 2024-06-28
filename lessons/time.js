
// milisecond
const milisecond = () => 1000

// clearscreen
const clear = () => console.clear()

// readcurrenttime
const getDateTime = () => new Date()

// get the time
const loadTime = (date)=>({            
    hour:date.getHours(),
    minute:date.getMinutes(),
    second:date.getSeconds(),
    ampm:"AM"})

// changedateto12
const changeTime = clockTime => ({...clockTime,
    hour:clockTime.hour>12 ? clockTime.hour - 12 : clockTime.hour})

// addZeroHour
const hourZero = time => ({...time,
    hour:time.hour < 10 ? `0${time.hour}` : time.hour
})

    // // addZero
    // const addZero = (time,str) => ({...time,
    //     str:time.str < 10 ? `0${time.str}` : time.str
    // })
    // addZeroMinit
    const minuteZero = time => ({...time,
        minute: minute < 10 ? `0${time.minute}` : time.minute
    })

    // addZeroSecond
    const secondZero = time => ({...time,
        second: time.second < 10 ? `0${time.second}` : time.second
    })

    // addampm
    const addAmPm = time => ({...time,
        ampm:time.hour > 12 ? "PM" : "AM"
    })
    
    const composeTime = (a,b,c,d)=>(time)=>a(b(c(d(time))))
    const timeFix = composeTime(hourZero,minuteZero,secondZero,addAmPm)
    // formattime
    const formatTime = time => (`${time.hour}:${time.minite}:${time.second} ${time.ampm}`)
    
// display
const disp = time => console.log(time)

let compose = (a,b,c,d,e,f,g)=>(data)=>a(b(c(d(e(data)))))
const final = compose(disp,formatTime,changeTime,loadTime,getDateTime)
// create function

setInterval(final,milisecond)
