import { Component } from "react";
import "./index.css"
class Stopwatch extends Component {
    state = {
        time: 0,
        isRunning: false
    }

    componentDidMount() {

    }
    onStartTimer = () => {
        this.timerId = setInterval(this.updateTimer, 1000)
        this.setState({ isRunning: true })

    }

    updateTimer = () => {
        this.setState((prev) => {
            return {
                time: prev.time + 1
            }
        })
    }
    onResetTimer = () => {
        this.setState(({ isRunning: false, time: 0 }))
    }
    onPauseTimer = () => {
        this.setState(({ isRunning: false }))
        clearInterval(this.timerId)
    }
    renderSeconds = () => {
        const { time } = this.state
        const seconds = Math.floor(time % 60)
        if (seconds < 10) {
            return `0${seconds}`

        }
        return seconds
    }
    renderMinutes = () => {
        const { time } = this.state
        const minutes = Math.floor(time / 60)
        if (minutes < 10) {
            return `0${minutes}`
        }
        return minutes
    }

    render() {

        const time = `${this.renderMinutes()}:${this.renderSeconds()}`
        return (
            <div className="container">
                <h1 className="heading">Stopwatch</h1>
                <p>{time}</p>
                <div>

                    <button className="button" type="button" onClick={this.onStartTimer}>Start</button>
                    <button className="button" type="button" onClick={this.onPauseTimer}>Pasue</button>
                    <button className="button" type="button" onClick={this.onResetTimer}>Reset</button>
                </div>
            </div >
        )
    }

}

export default Stopwatch
