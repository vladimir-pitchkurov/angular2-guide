import { Component } from "@angular/core";
import {Phrase} from "../shared/phrase";

@Component({
    moduleId: module.id,
    selector: "my-home",
    templateUrl: "home.component.html"
})
export class HomeComponent{

    model: Phrase = new Phrase(1, "", "", "", "", null);

    // submitted: boolean = false;

    onSabmit(){
        // this.submitted = true;
        console.log("submitted");
    }
}