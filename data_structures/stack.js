/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Stack
*/

/**
 * Stack data structures
 */
function Stack() {
    this._top = -1;
    this._values = [];
}

// is empty
/**
 * Check the stack is empty?
 * @return true if the stack really empty and false for otherwise case
 */
Stack.prototype.isEmpty = function () {
    return (this._values === undefined || this._values.length == 0);
};

// get size
Stack.prototype.size = function () {
    return this._values.length;
};

// Pushing
Stack.prototype.push = function (data) {
    this._top++;
    this._values[this._top] = data;
};


// Popping
Stack.prototype.pop = function () {
    if (this._top < 0) {
        return null;
    }

    var topElement = this._values[this._top];
    this._top--;
    this._values.length--;

    return topElement;
};

// Peeking
Stack.prototype.peek = function () {
    if (this._top < 0) {
        return null;
    }

    return this._values[this._top];
};


// is stack
Stack.prototype.isStack = function () {
    return el instanceof Stack;
};

// Stack ES6 version
class STACK {
    /**
     * 
     */
    constructor() {
        this.top = -1;
        this.data = [];
    }

    /**
     * 
     * @param {any} item is the thing you want to pushing to the stack
     */
    push(item) {
        this.top++;
        this.data[this.top] = item;
    }

    /**
     * 
     */
    pop() {
        if (this._top < 0) {
            return null;
        }

        var top_element = this.data[this.top];
        this._top--;
        this._values.length--;

        return top_element;
    }

    /**
     * 
     */
    size() {
        return this.data.length;
    }

    /**
     * 
     */
    isEmpty() {
        return (this.data === undefined || this.data.length == 0) ? true : false;
    }

    /**
     * 
     */
    first() {
        if (this.top === -1) {
            return null;
        }
        return this.data[top];
    }

    /**
     * 
     */
    last() {
        if (this.top === -1) {
            return null;
        }
        return this.data[this.data.length - 1];
    }
}

// ================================================
/**
 * Authors: Nhut-Nam Le & Minh-Vu Nguyen
 * VNU-HCM, University of Science
 * © 2020
 */