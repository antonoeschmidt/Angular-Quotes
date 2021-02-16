import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kanye',
  templateUrl: './kanye.component.html',
  styleUrls: ['./kanye.component.css'],
})
export class KanyeComponent implements OnInit {
  quote: string = '';
  quotes: string[] = [];
  maxLength: number = 0;
  avgLength: number = 0;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getKanye().subscribe((data) => {
      this.quote = data.quote;
      this.quotes.push(data.quote);
      if (data.quote.length > this.maxLength)
        this.maxLength = data.quote.length;
      this.computeAvg();
    });
  }

  getKanye(): Observable<IQuote> {
    return this.http.get<IQuote>('https://api.kanye.rest/');
  }

  updateQuote() {
    this.ngOnInit();
  }

  computeAvg() {
    let totalLen = 0;
    this.quotes.map((q) => (totalLen += q.length));
    this.avgLength = parseFloat((totalLen / this.quotes.length).toFixed(2));
  }
}

interface IQuote {
  quote: string;
}
