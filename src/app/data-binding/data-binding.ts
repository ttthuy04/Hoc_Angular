import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Thêm dòng này

@Component({
  selector: 'app-data-binding',
  standalone: true, // Thêm dòng này nếu chưa có
  imports: [FormsModule], // Thêm FormsModule vào đây
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  username = 'Thuy';
  value = '';
  changeName() {
    this.username = 'Thanh Thuy';
  }
}
