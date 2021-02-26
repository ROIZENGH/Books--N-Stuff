class Media {
    constructor (title){
      this._title=title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    getAverageRating(){
      const arrLen = this._ratings.length();
      let arrSum = 0;
      for (let i=0; i < arrLen; i++){
        arrSum+=this._ratings[i];
      }
      const arrAvg = arrSum/arrLen;
      return arrAvg;
    }
  
    toggleChekOutStatus(){
      if(this._isCheckedOut == false){
        this._isCheckedOut = true;
      }
      else {
        this._isCheckedOut = false;
      }
    }
    addRating(newRating){
      if(typeof newRating == "number"){
        this._ratings.push(newRating);
      }
      else {
        console.log(`${newRating} is not a number, please use only numbers for new Ratings.`)
      }
    }
  }
  
  class Book extends Media {
    constructor (author, title, pages){
      super(title);
      this._author=author;
      this._pages=pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor (director, title, runTime){
      super(title);
      this._director=director;
      this._runTime=runTime;
    }
      get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor (artist, title, songs){
      super(title);
      this._artist=artist;
      this._songs=songs;
    }
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  }