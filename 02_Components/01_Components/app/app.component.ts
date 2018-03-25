import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    outputs: ['rows']
}) export class AppComponent {

    rows: any =3;
    asd: number = 3;
}