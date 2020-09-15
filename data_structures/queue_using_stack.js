function QueueS() {
    this.input_stack = [];
    this.output_stack = [];
}

QueueS.prototype.enqueue = function(item) {
    this.input_stack.push(item);
};

QueueS.prototype.dequeue = function() {
    
}