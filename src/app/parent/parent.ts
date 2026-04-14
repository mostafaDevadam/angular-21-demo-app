import { Component, signal, effect, computed, EffectRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
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
