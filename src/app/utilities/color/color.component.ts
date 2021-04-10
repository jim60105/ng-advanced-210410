import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.type = +params.get('type');
    })
  }

  plusOne($event) {
    this.router.navigate([
      '../', this.type + 1
    ]
    , { relativeTo: this.route });
  }
}
