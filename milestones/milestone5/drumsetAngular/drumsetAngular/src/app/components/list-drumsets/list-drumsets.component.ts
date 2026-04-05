import { Component, OnInit } from '@angular/core';
import { DrumsetsService } from '../../services/drumsets.service';

@Component({
  selector: 'app-drumsets',
  templateUrl: './drumsets.component.html'
})
export class DrumsetsComponent implements OnInit {

  drumsets: any[] = [];

  constructor(private drumsetsService: DrumsetsService) {}

  ngOnInit() {
    this.drumsetsService.getDrumsets()
      .subscribe(data => {
        this.drumsets = data;
      });
  }
}
