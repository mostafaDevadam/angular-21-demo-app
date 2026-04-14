import { Component } from '@angular/core';
import { Parent } from '../parent/parent';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Parent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
