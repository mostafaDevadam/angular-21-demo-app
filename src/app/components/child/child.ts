import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  value = model<string>()
  counter = model<number>(0)
  data = input<string>("")
  requiredData = input.required<string>()
  // Method that parent can call
  greet(name: string = 'Parent') {
    return `Hello ${name}! I'm the child component.`;
  }

  

  notify = output<string>()

  childMessage = signal("hallo von Child")

  sendMessage() {
    this.notify.emit("Hallo von signal child")
  }

  increment() {
    this.counter.update(c => c + 1)
  }


  // Method to focus the input from parent
  focusInput() {
    const input = document.querySelector('app-child input') as HTMLInputElement;
    input?.focus();
  }

  updateMessage() {
    this.childMessage.set('Message updated by child at ' + new Date().toLocaleTimeString());
  }

}
