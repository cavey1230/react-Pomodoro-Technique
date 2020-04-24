import React from "react";

const IntervalPad = (props) => {
    let SessionMinute = props.session - 1;
    let BreakMinute = props.break - 1;
    let BetweenMinute = SessionMinute;
    let CountPD = "Close";
    let second = 60;
    let intervalID = 0;


    const intervalFC = () => {
        second -= 1;
        console.log(BetweenMinute, second);
        props.interValAction(BetweenMinute, second);
        if (second === 0) {
            BetweenMinute -= 1;
            second = 60;
            if (BetweenMinute < 0) {
                switch (CountPD) {
                    case "Close":
                        BetweenMinute = BreakMinute;
                        CountPD = "Open";
                        break;
                    case "Open":
                        BetweenMinute = SessionMinute;
                        CountPD = "Close";
                        break;
                    default:
                        alert("系统出错");
                }
            }
        }
    }

    const startInterVal = () => {
        clearInterval(intervalID);
        BetweenMinute = SessionMinute
        CountPD = "Close";
        second = 60;
        intervalID = setInterval(intervalFC, 1000);
    }
    const pauseInterVal = () => {
        clearInterval(intervalID);
    }
    const RestInterVal = () => {
        clearInterval(intervalID);
        BetweenMinute = SessionMinute;
        CountPD = "Close";
        second = 60;
        intervalID = setInterval(intervalFC, 1000);
    }


    return (
        <div>
            <p>{props.interval.minute}:{props.interval.second}</p>
            <button onClick={() => startInterVal()}>
                <i className="iconfont icon-bofang"></i>
            </button>
            <button onClick={() => pauseInterVal()}>
                <i className="iconfont icon-zanting"></i>
            </button>
            <button onClick={() => RestInterVal()}>
                <i className="iconfont icon-tingzhi"></i>
            </button>
        </div>
    )
}
export {IntervalPad}