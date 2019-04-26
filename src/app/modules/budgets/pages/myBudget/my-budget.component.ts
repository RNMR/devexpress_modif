import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector:'',
  templateUrl:'my-budget.component.html',
  styleUrls: ['./my-budget.component.scss']
})
export class MyBudgetComponent {
  dataSource: any;

  constructor(http: HttpClient) {
      this.dataSource = {
          load: function(loadOptions) {
              return http.get("https://js.devexpress.com/Demos/Mvc/api/treeListData?parentIds=" + loadOptions.parentIds.join(","))
                         .toPromise();
          }
      }
  }

  customizeSizeText(e) {
      if(e.value !== null) {
          return Math.ceil(e.value / 1024) + " KB";
      }
  }
}