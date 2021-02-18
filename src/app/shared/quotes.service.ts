import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<IQuote> {
    return this.http
      .get<IQuote>('https://api.kanye.rest/')
      .pipe(catchError(this.errorHandler));
  }

  getQuotes(): Observable<IQuote[]> {
    return this.http.get<IQuote[]>('http://localhost:3000/quotes');
  }

  saveQuote(quote: string) {
    return this.http
      .post<IQuote>('http://localhost:3000/quotes', { quote: quote })
      .pipe(catchError(this.errorHandler));
  }

  computeAvg(quotes: string[]): number {    
    let totalLen = 0;
    quotes.map((q) => (totalLen += q.length));
    return parseFloat((totalLen / quotes.length).toFixed(2));
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend error
      console.error(`Backend returned code ${error.status} and error: `);
      console.error(error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}

interface IQuote {
  quote: string;
}
