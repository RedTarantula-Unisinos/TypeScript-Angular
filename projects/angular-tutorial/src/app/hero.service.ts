import { Injectable } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from './mock-heroes'
import { MessageService } from './messages.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessageService) { }

getHeroes(): Observable<Hero[]>{
	this.messageService.add('HeroService: fetched heroes');
	return of(HEROES);
}

}
