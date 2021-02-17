import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quote: string = '';
  quotes: string[] = [];
  maxLength: number = 0;
  avgLength: number = 0;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getQuote().subscribe((data) => {
      this.quote = data.quote;
      this.quotes.push(data.quote);
      this.avgLength = this.computeAvg();
      if (data.quote.length > this.maxLength)
        this.maxLength = data.quote.length;
    });
  }
  getQuote(): Observable<IQuote> {
    return this.http.get<IQuote>('https://api.kanye.rest/');
  }
  updateQuote() {
    this.ngOnInit();
  }
  computeAvg(): number {
    let totalLen = 0;
    this.quotes.map((q) => (totalLen += q.length));
    return parseFloat((totalLen / this.quotes.length).toFixed(2));
  }
}
interface IQuote {
  quote: string;
}
