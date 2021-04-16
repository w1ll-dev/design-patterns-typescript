import { ImageEditor } from './image-editor';
import { ImageEditorMemento } from './image-editor-memento';

export class ImageEditorBackupMenager {
  private readonly mementos: ImageEditorMemento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backUp(): void {
    this.mementos.push(this.imageEditor.save());
    console.log('Save Backup!');
  }

  restore(): void {
    const lastMemento = this.mementos.pop();

    if (!lastMemento) {
      console.log('Restore is impossible!');
      return;
    }

    this.imageEditor.restore(lastMemento);
  }

  showMementos(): void {
    this.mementos.forEach((memento) => console.log(memento));
  }
}
