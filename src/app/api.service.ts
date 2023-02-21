import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CompanyProfile, Socialmedia } from './model/user';



@Injectable({ providedIn: 'root' })
export class HeroService {

    private heroesUrl = 'api/companyList';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
    ) { }

    /** GET heroes from the server */
    getCompanyList(): Observable<CompanyProfile[]> {
        return this.http.get<CompanyProfile[]>(this.heroesUrl)
            .pipe(
               
                catchError(this.handleError<CompanyProfile[]>('getCompanyList', []))
            );
    }

    getHero(id: number): Observable<CompanyProfile> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<CompanyProfile>(url).pipe(
           
            catchError(this.handleError<CompanyProfile>(`getHero id=${id}`))
        );
    }
   
    
    addHero(companyName: string,
        phoneNo: string,
        email: string,
        website: string,
        socialmedia: Socialmedia[]): Observable<CompanyProfile> {
       
        const myBody = { companyName: companyName, phoneNo: phoneNo,email:email,website:website,socialmedia:socialmedia };
        return this.http.post<CompanyProfile>(this.heroesUrl, myBody, this.httpOptions).pipe(

            catchError(this.handleError<CompanyProfile>('addHero'))
        );
    }

    /** DELETE: delete the hero from the server */
    deleteHero(id: number): Observable<CompanyProfile> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete<CompanyProfile>(url, this.httpOptions).pipe(
           
            catchError(this.handleError<CompanyProfile>('deleteHero'))
        );
    }

    /** PUT: update the hero on the server */
    updateHero(hero: CompanyProfile,id :number| undefined): Observable<any> {
        console.log(id);
        const url = `${this.heroesUrl}`;
        return this.http.put(url, hero, this.httpOptions).pipe(
         
            catchError(this.handleError<any>('updateHero'))
        );
    }
    // /** GET hero by id. Return `undefined` when id not found */
    // getHeroNo404<Data>(id: number): Observable<CompanyProfile> {
    //     const url = `${this.heroesUrl}/?id=${id}`;
    //     return this.http.get<CompanyProfile[]>(url)
    //         .pipe(
    //             map(heroes => heroes[0]), // returns a {0|1} element array
    //             tap(h => {
    //                 const outcome = h ? 'fetched' : 'did not find';
    //                 this.log(`${outcome} hero id=${id}`);
    //             }),
    //             catchError(this.handleError<Hero>(`getHero id=${id}`))
    //         );
    // }

    // /** GET hero by id. Will 404 if id not found */
    // getHero(id: number): Observable<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get<Hero>(url).pipe(
    //         tap(_ => this.log(`fetched hero id=${id}`)),
    //         catchError(this.handleError<Hero>(`getHero id=${id}`))
    //     );
    // }

    // /* GET heroes whose name contains search term */
    // searchHeroes(term: string): Observable<Hero[]> {
    //     if (!term.trim()) {
    //         // if not search term, return empty hero array.
    //         return of([]);
    //     }
    //     return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    //         tap(x => x.length ?
    //             this.log(`found heroes matching "${term}"`) :
    //             this.log(`no heroes matching "${term}"`)),
    //         catchError(this.handleError<Hero[]>('searchHeroes', []))
    //     );
    // }

    //////// Save methods //////////


  
    // /** DELETE: delete the hero from the server */
    // deleteHero(id: number): Observable<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;

    //     return this.http.delete<Hero>(url, this.httpOptions).pipe(
    //         tap(_ => this.log(`deleted hero id=${id}`)),
    //         catchError(this.handleError<Hero>('deleteHero'))
    //     );
    // }

    // /** PUT: update the hero on the server */
    // updateHero(hero: Hero): Observable<any> {
    //     return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    //         tap(_ => this.log(`updated hero id=${hero.id}`)),
    //         catchError(this.handleError<any>('updateHero'))
    //     );
    // }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
         

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/