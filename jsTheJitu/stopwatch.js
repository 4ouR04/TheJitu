function stopwatch() {
  this._startTime = null;
  this._endTime = null;
  this._duration = 0;
  this._started = false;

  this.start = () => {
    if (!this._started) {
      this._started = true;
      this._startTime = Date.now();
      //   setInterval(() => {}, 1000);
      //   clearInterval(myint);
      console.log(`Starting...`);
      setTimeout(() => {
        console.clear();
      }, 1000);
      setTimeout(() => {
        console.log(`Started!`);
      }, 2000);
    } else {
      throw new Error("Stopwatch is already running");
    }
  };

  this.stop = () => {
    if (this._started) {
      this._started = false;
      this._endTime = Date.now();
      this._duration = this._endTime - this._startTime;
      console.log(`Stopping...`);
      setTimeout(() => {
        console.clear();
      }, 1000);
      setTimeout(() => {
        console.log(`Stopped!`);
      }, 2000);
    } else {
      throw new Error("Stopwatch is already stopped.");
    }
  };

  this.reset = () => {
    this._startTime = null;
    this._endTime = null;
    this._duration = 0;
    console.log(`Reseting...`);
    setTimeout(() => {
      console.clear();
    }, 1000);
    setTimeout(() => {
      console.log(`Stopwatch has been reset!`);
    }, 2000);
  };

  this.duration = () => {
    return this._duration / 1000;
  };
}

const sw = new stopwatch();
// sw.start();

// sw.start();
