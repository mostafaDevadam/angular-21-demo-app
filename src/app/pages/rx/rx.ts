import { Component, computed, model, OnChanges, OnInit, signal } from '@angular/core';
import { BehaviorSubject, debounce, debounceTime, distinctUntilChanged, fromEvent, map, Observable, Subject, ReplaySubject,
  AsyncSubject



 } from 'rxjs';

@Component({
  selector: 'app-rx',
  standalone: true,
  imports: [],
  templateUrl: './rx.html',
  styleUrl: './rx.css',
})
export class Rx implements OnChanges, OnInit {

  //searchInput = document.getElementById('search') as HTMLInputElement;
  search = signal("")

  result = computed(() => {
    return this.search()
  })

// single model signal for the input
  query = signal('');

  // example data source
   list = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  // derived results via computed
  results = computed(() => {
    const q = this.query().trim().toLowerCase();
    const r = q ? this.list.filter(i => i.includes(q)) : [];
    console.log({q, r})
    return r
  });

  // subject
   subject = new Subject<string>()
   b_subject = new BehaviorSubject<string>("test")
   r_subject = new ReplaySubject<string>(2)
   async_subject = new AsyncSubject<number>()
 





  myObservable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });


  ngOnInit() {
    this.myObservable.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
      complete: () => console.log('Observable completed'),
    })

      this.subject.subscribe(value => console.log("A:", value))
      this.subject.next("asd")
      this.subject.subscribe(value => console.log("B:", value))
      this.subject.next("qwe")

      this.b_subject.subscribe(value => console.log("b_subject A:", value))
      this.b_subject.next("updated")
      this.b_subject.subscribe(value => console.log("b_subject B:", value))
      this.b_subject.next("hallo")

      this.r_subject.next("Ein")
      this.r_subject.next("Zwei")
      this.r_subject.next("Drei")

      this.r_subject.subscribe((value) => console.log("r_subject:", value))

      this.async_subject.subscribe(value => console.log("async_subject:", value))
      this.async_subject.next(1)
      this.async_subject.next(2)
      this.async_subject.next(3)

      this.async_subject.complete()
      

    /*if (this.searchInput?.value) {
      const search$ = fromEvent(this.searchInput!!, 'input').pipe(
        map((event: any) => event.target.value),
        debounceTime(300),
        distinctUntilChanged()
      )
      search$.subscribe((value) => console.log(value));
    }*/

  }

  ngOnChanges() {
    console.log('ngOnChanges called');
    this.subject.next("tzu")
    this.subject.subscribe(value => console.log("D:", value))

  }

}
