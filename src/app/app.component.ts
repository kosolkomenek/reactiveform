import { Component } from '@angular/core';

export type EditorType = 'form' | 'groupform' |'import';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform';
  editor: EditorType = 'form';

  get showForm() {
    return this.editor === 'form';
  }

  get showGroupform() {
    return this.editor === 'groupform';
  }

  get showImport() {
    return this.editor ==='import';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
