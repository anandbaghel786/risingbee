import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rising-bean',
  templateUrl: './rising-bean.component.html',
  styleUrls: ['./rising-bean.component.css']
})
export class RisingBeanComponent implements OnInit {
  private mediaSub: Subscription;
  constructor(private cdRef: ChangeDetectorRef, private mediaObserver: MediaObserver) { }

  ngOnInit() {

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change);
      }
    )
  }

}
