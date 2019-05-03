import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector:'',
  templateUrl:'my-budget.component.html',
  styleUrls: ['./my-budget.component.scss']
})
export class MyBudgetComponent {
  dataSource: any;
  testSource:any;

  constructor(http: HttpClient) {
    this.dataSource = {
      load: function(loadOptions) {
        return http.get("https://js.devexpress.com/Demos/Mvc/api/treeListData?parentIds=" + loadOptions.parentIds.join(","))
                    .toPromise();
      }
    }

    let data;
    http.get("https://jsonplaceholder.typicode.com/posts").pipe(first()).subscribe( a => { 
      console.log(a) 
      data=a;
      data.forEach(d => {
        d.keyData = `${d.userId}_${d.id}`
      });
      //These will be the fathers, the only important key is keyData
      const zen = [
        { id:"0001", keyData: "1", title:'Primero' },
        { id:"0002", keyData: "2", title:'Segundo' },
        { id:"0003", keyData: "3", title:'meep' },
        { id:"0004", keyData: "4", title:'ahua' },
        { id:"0005", keyData: "5", title:'Quinto' },
        { id:"0006", keyData: "6", title:'Sexto' },
        { id:"0007", keyData: "7", title:'Bruajds' },
        { id:"0008", keyData: "8", title:'manito' },
        { id:"0009", keyData: "9", title:'Noveno' },
        { id:"0010", keyData: "10",title:'Decameron' },
      ]
      this.testSource = [...data, ...zen]
      console.log( "woopsie",data)
    })
  }

  customizeSizeText(e) {
      if(e.value !== null) {
          return Math.ceil(e.value / 1024) + " KB";
      }
  }
}