import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kanye',
  templateUrl: './kanye.component.html',
  styleUrls: ['./kanye.component.css']
})
export class KanyeComponent implements OnInit {
  quote: string = "";

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getKanye().subscribe((data) => (this.quote = data.quote));
  }

  getKanye(): Observable<IQuote> {
    return this.http.get<IQuote>("https://api.kanye.rest/");
  }
}

interface IQuote {
  quote: string;
}