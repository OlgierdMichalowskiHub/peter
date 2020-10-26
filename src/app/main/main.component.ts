import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = (data) => {
      data.matches ? this.sidenav.close() : this.sidenav.open();
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) {
            document.querySelectorAll('.sidenav-list a').forEach((element) => {
              element.classList.remove('sidenav-activeLink');
            });
            document.querySelector(`.sidenav-itemList--${tree.fragment}`).classList.add('sidenav-activeLink');
            element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
          }
        }
      }
    });
  }

  @ViewChild('snav') public sidenav: MatSidenav;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: (data) => void;

  ngAfterViewInit() {
    this.mobileQuery.matches ? this.sidenav.close() : this.sidenav.open();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
