import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  title = "todo-ui";

  constructor(private readonly _http: HttpClient,) {

  }

  ngOnInit(): void {
    this._http.get('api').subscribe((res) => console.log(res));
  }
}
