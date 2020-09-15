function Stack() {
    this._top = -1;
    this._values = [];
}

// is empty
Stack.prototype.isEmpty = function() {
    return (this._values === undefined || this._values.length == 0);
};

// get size
Stack.prototype.size = function() {
    return this._values.length;
};

// Pushing
Stack.prototype.push = function(data) {
    this._top++;
    this._values[this._top] = data;
};


// Popping
Stack.prototype.pop = function() {
    if (this._top < 0) {
      return null;
    }
    
    var topElement = this._values[this._top];
    this._top--;
    this._values.length--;
  
    return topElement;
};

// Peeking
Stack.prototype.peek = function() {
    if (this._top < 0) {
      return null;
    }
    
    return this._values[this._top];
};


// is stack
Stack.prototype.isStack = function() {
    return el instanceof Stack;
}