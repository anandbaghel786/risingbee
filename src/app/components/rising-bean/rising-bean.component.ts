import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rising-bean',
  templateUrl: './rising-bean.component.html',
  styleUrls: ['./rising-bean.component.css']
})
export class RisingBeanComponent implements OnInit {
  private mediaSub: Subscription;
  constructor(private cdRef: ChangeDetectorRef, private mediaObserver: MediaObserver, private router: Router) { }

  ngOnInit() {

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change);
      }
    )
  }

  public goToLayoutExample() {
    this.router.navigate(['divcomp'])
  }

}
