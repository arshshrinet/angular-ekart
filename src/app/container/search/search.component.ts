import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText: string='';
  @ViewChild('searchInput') searchInputEl:ElementRef;
//1. Create an event
  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
  updateSearchtext(){
    this.searchText=this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

}
