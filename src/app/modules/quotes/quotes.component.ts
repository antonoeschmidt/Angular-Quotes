import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/shared/quotes.service';

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

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.getQuotes();
    this.getQuote();
  }
  getQuotes() {
    this.quotesService.getQuotes().subscribe((data) => {
      this.quotes = data.map((q) => {
        if (q.quote.length > this.maxLength) this.maxLength = q.quote.length;
        return q.quote;
      });
      this.avgLength = this.quotesService.computeAvg(this.quotes);
    });
  }
  getQuote() {
    this.quotesService.getQuote().subscribe((data) => {
      this.quote = data.quote;
      if (data.quote.length > this.maxLength)
        this.maxLength = data.quote.length;
    });
  }
  updateQuote() {
    this.getQuote();
  }
  saveQuote() {
    this.quotesService
      .saveQuote(this.quote)
      .subscribe((data) => this.quotes.push(data.quote));
    this.getQuote();
  }
}
