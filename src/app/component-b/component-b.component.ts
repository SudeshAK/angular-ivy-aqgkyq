import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TableGeneratorService } from "../table-generator.service";

@Component({
  selector: "app-component-b",
  templateUrl: "./component-b.component.html",
  styleUrls: ["./component-b.component.css"]
})
export class ComponentBComponent implements OnInit {
  numberList = [];
  tableFor: number;
  tablesSub: Subscription;
  constructor(private tablesGen: TableGeneratorService) {
    this.tablesSub = this.tablesGen.getData().subscribe(tableForRes => {
      this.tableFor = tableForRes;
    });
  }

  ngOnInit() {
    this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  ngonDestroy() {
    this.tablesSub.unsubscribe();
  }
}
