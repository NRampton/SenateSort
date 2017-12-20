import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
        ActivatedRouteSnapshot } from '@angular/router';
import { SenatorService } from './senator.service';

@Injectable()
export class SenateResolverService {
  constructor(
    private _ss: SenatorService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._ss.getSenators().subscribe(
      (data) => { return data },
      (err) => {
        console.log(err);
        this._router.navigate(['/landing']);
        return null;
      }
    )
  }
}
