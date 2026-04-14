import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, /*TranslateDirective*/],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  userName = "Mostafa"
  messagesCount = "19"
}
