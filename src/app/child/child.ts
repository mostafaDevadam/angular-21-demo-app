import { Component, input, model, output } from '@angular/core';

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

  notify = output<string>()

  sendMessage() {
    this.notify.emit("Hallo von signal child")
  }

  increment() {
    this.counter.update(c => c + 1)
  }
}
