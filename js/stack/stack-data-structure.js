class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
   
    if (this.stackControl.length < this.MAX_SIZE){
      return true
    } 
    return false

  }
  display() {
   
     return this.stackControl
   
  }

  isEmpty() {
   
    if(this.stackControl.length <= 0){
      return true
    } 
    return false

  }

  push(item) {
    if(this.canPush()){
      this.stackControl.push(item)
      return this.stackControl
    }  else
      return 'Stack Overflow'
  }

  pop() {
    if(!this.isEmpty()){
      return this.stackControl.pop()
    } 
    return 'Stack Underflow'
  }
}
