import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/shared/quotes.service';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.css'],
})
export class QuotesTableComponent implements OnInit {
  quotes: string[] = [];

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.getQuotes().subscribe((data) => {
      this.quotes = data.map((q) => {
        return q.quote;
      });
    });
  }
}
