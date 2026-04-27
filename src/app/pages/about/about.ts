import { Component } from '@angular/core';
import { Parent } from '../../components/parent/parent';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Parent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
