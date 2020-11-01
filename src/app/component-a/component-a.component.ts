import { Component, OnInit } from "@angular/core";
import { TableGeneratorService } from "../table-generator.service";

@Component({
  selector: "app-component-a",
  templateUrl: "./component-a.component.html",
  styleUrls: ["./component-a.component.css"]
})
export class ComponentAComponent implements OnInit {
  tableFor: number;
  constructor(private tablesGen: TableGeneratorService) {}

  ngOnInit() {}
  sendTable() {
    this.tablesGen.sendData(this.tableFor);
  }
}
