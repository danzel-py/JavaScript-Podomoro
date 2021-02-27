import React from 'react';
import './App.css';
import alarmMp3 from './Tururururu 5 seconds.mp3'

function App() {
  return (
    <div className="outer">
      <div className="middle">
        <div className="inner">
          <Clock />
        </div>
      </div>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      minutes: 25,
      seconds: 0,
      minutesDummy: '25',
      secondsDummy: '00',
      onPlay: false,
      isReset: true,
      onBreak: false
    }
    this.updateLength = this.updateLength.bind(this)
    this.timerSetting = this.timerSetting.bind(this)
    this.setTimeTemplate = this.setTimeTemplate.bind(this)
    this.onReset = this.onReset.bind(this)
    this.setAlarm = this.setAlarm.bind(this)
  }

  setAlarm(){
    if(this.state.isReset){
      document.getElementById('beep').load()
    }
    
    else{
      if(this.state.seconds === 0 && this.state.minutes === 0){
        document.getElementById('beep').load()
        document.getElementById('beep').play()
      }
    }
  
  }

  setTimeTemplate() {
    if (this.state.minutes < 10) {
      this.setState((state) => ({
        minutesDummy: `0${state.minutes}`
      }))
    }
    else {
      this.setState((state) => ({
        minutesDummy: `${state.minutes}`
      }))
    }
    if (this.state.seconds < 10) {
      this.setState((state) => ({
        secondsDummy: `0${state.seconds}`
      }))
    }
    else {
      this.setState((state) => ({
        secondsDummy: `${state.seconds}`
      }))
    }
  }

  updateLength(id) {
    if (this.state.isReset) {
      switch (id) {
        case 'break-increment':
          if (this.state.breakLength < 60) {
            this.setState({ breakLength: this.state.breakLength + 1 })
          }
          else {
            //alert("Sorry, Break Length cannot be greater than sixty!")
          }
          break
        case 'break-decrement':
          if (this.state.breakLength > 1) {
            this.setState({ breakLength: this.state.breakLength - 1 })
          }
          else {
            //alert("Sorry, Break Length cannot be zero!")
          }
          break
        case 'session-increment':
          if (this.state.sessionLength < 60) {
            this.setState({ sessionLength: this.state.sessionLength + 1 })
          }
          else {
            //alert("Sorry, Session Length cannot be greater than sixty!")
          }
          break
        case 'session-decrement':
          if (this.state.sessionLength > 1) {
            this.setState({ sessionLength: this.state.sessionLength - 1 })
          }
          else {
            //alert("Sorry, Session Length cannot be zero!")
          }
          break
        default:
          break
      }
    }
  }

  timerSetting() {
    this.interval = setInterval(() => {
      if (this.state.isReset) {

      }
      else {
        if (this.state.onPlay) {
          if (this.state.seconds === 0) {
            if (this.state.minutes === 0) {
              if (this.state.onBreak) {
                this.setState((state => ({
                  minutes: state.sessionLength,
                  onBreak: false
                })))
              }
              else {
                this.setState((state) => ({
                  minutes: state.breakLength,
                  onBreak: true
                }))
              }
            }

            else {
              this.setState((state) => ({ minutes: state.minutes - 1, seconds: 59 }))
            }
          }
          else {
            this.setState((state) => ({ seconds: state.seconds - 1 }))
          }
        }
        else {

        }
      }
    }, 1000);
  }

  componentDidUpdate(_prevProp, prevState) {
    if (this.state.sessionLength !== prevState.sessionLength) {
      this.setState((state) => ({ minutes: state.sessionLength }))
    }
    if (this.state.seconds !== prevState.seconds || this.state.minutes !== prevState.minutes) {
      this.setTimeTemplate()
      this.setAlarm()
    }
  }

  componentDidMount() {
    this.timerSetting()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onReset() {
    this.setState(() => ({
      sessionLength: 25,
      breakLength: 5,
      minutes: 25,
      seconds: 0,
      minutesDummy: '25',
      secondsDummy: '00',
      onPlay: false,
      isReset: true,
      onBreak: false
    }))
    this.setTimeTemplate()
    this.setAlarm()
  }

  render() {
    let status
    if (this.state.onBreak) {
      status = 'Break'
    }
    else {
      status = 'Session'
    }
    let playpauseButton
    let resetButton = <div id="reset" onClick={this.onReset}>⟳</div>
    if (this.state.isReset) {
      playpauseButton = <div onClick={() => { this.setState({ isReset: false, onPlay: true }) }} id="start_stop">▶</div>
    }
    else {
      if (this.state.onPlay) {
        playpauseButton = <div onClick={() => { this.setState({ onPlay: false }) }} id="start_stop">❚❚</div>
      }
      else {
        playpauseButton = <div onClick={() => { this.setState({ onPlay: true }) }} id="start_stop">▶</div>
      }
    }

    return (
      <div id="bigContainer">
        <div id="title">Pomodoro Clock</div>
        <div id="topContainer" className="unselectable">
          <div className="flex-row">
            <div id="break-label">Break Length:</div>
            <div className="adjustArrows">
              <div id="break-increment" onClick={() => this.updateLength('break-increment')}>▲</div>
              <div id="break-length">{this.state.breakLength}</div>
              <div id="break-decrement" onClick={() => this.updateLength('break-decrement')}>▼</div>
            </div>
            <div className="minute-label"> min.</div>
          </div>
          <div className="flex-row">
            <div id="session-label">Session Length:</div>
            <div className="adjustArrows">
              <div id="session-increment" onClick={() => this.updateLength('session-increment')}>▲</div>
              <div id="session-length">{this.state.sessionLength}</div>
              <div id="session-decrement" onClick={() => this.updateLength('session-decrement')}>▼</div>
            </div>
            <div className="minute-label">min.</div>
          </div>
        </div>
        <div id="midContainer">
          <div id="timer-label">{status}</div>
          <div id="time-left" className="flex-row">
            {this.state.minutesDummy}:{this.state.secondsDummy}
          </div>
          <div id="botContainer" className="unselectable flex-row">
          <div id="ppButton">{playpauseButton}</div>
          <div id="resetButton">{resetButton}</div>
          </div>
        </div>
        <div id="audioContainer">
          <audio id="beep" src={alarmMp3}></audio>
        </div>
        <div id='creditContainer'>
      Created on <a href="https://www.reactjs.org">ReactJS</a> by <a href="https://github.com/danzel-py">danzel-py</a>
      </div>
      </div>
    )
  }
}




export default App;
