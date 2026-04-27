import { Component, signal, effect, computed, EffectRef, OnDestroy, OnChanges, SimpleChanges, viewChild, ElementRef, 





 } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnDestroy, OnChanges {
  parentValue = "parent value ..."
  parentData = "Hallo von parent"
  requiredValue = "required value"

  myCount = signal(10);

  child = viewChild(Child)
  //requiredChild = viewChildRequired(Child)


  // Query by template reference variable + ElementRef
  childInput = viewChild<ElementRef<HTMLInputElement>>('childComp'); // Note: template ref is on the component tag

  // Computed signal based on child
  computedGreeting = computed(() => {
    const c = this.child();
    return c ? c.greet('Angular 21 Parent') : 'Child not available yet';
  });

  childStatus = computed(() => this.child() ? '✅ Child is loaded' : '⏳ Waiting for child...');

  constructor() {
    // Effect runs whenever the child becomes available
    effect(() => {
      const currentChild = this.child();
      if (currentChild) {
        console.log('✅ Child component is now available in parent!', currentChild);
      }
    });
  }

  // Call a method on the child component
  callChildGreet() {
    const greeting = this.child()?.greet();
    console.log('Greeting from child:', greeting);
    alert(greeting);
  }

  // Focus input inside the child
  focusChildInput() {
    this.child()?.focusInput();
  }

  // Update child's signal from parent
  updateChildMessage() {
    const childInstance = this.child();
    if (childInstance) {
      childInstance.childMessage.set('Message updated from Parent at ' + new Date().toLocaleTimeString());
    } else {
      console.warn('Child not found yet');
    }
  }




  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    if (changes['myCount']) {
      console.log('ngOnChanges myCount changed:', changes['myCount'].currentValue);
    }
  }

  private readonly countEffect: EffectRef = effect(() => {
    console.log('EffectRef Count changed:', this.myCount());
    // ... your side effect
  });


   ef = effect(() => {
    console.log("effect myCount: ", this.myCount())
  })

  cm = computed(() => {
    console.log("computed myCount: ", this.myCount())
  })

  handleNotify(message: string){
    console.log("parent received message: ", message)
  }

  ngOnDestroy(){
     this.ef.destroy()
     this.countEffect.destroy()
  }
}
