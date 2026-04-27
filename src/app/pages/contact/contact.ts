import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private service = inject(AuthService)


  async ngOnInit() {
    await this.service.getVideos()
    .then(res => res.subscribe(res => console.log("videos:", res.data.map((v: any) => v.name))));
    
  }
}
