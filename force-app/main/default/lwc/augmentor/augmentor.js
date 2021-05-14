import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(event) {
      this.startCounter = parseInt(event.target.value);
    }

/*
TODO: Update handleMaximizeCounter and maximizeCounter to accept an argument 
that specifies the number to add to the count. 
Hint: Review what you did in step 1 to send a data-factor with the multiply custom event.
*/
    handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
      }
}