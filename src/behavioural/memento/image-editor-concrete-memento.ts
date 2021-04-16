import { ImageEditorMemento } from './image-editor-memento';

export class ImageEditorConcreteMemento implements ImageEditorMemento {
  constructor(
    private name: string,
    private date: Date,
    private filePath: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getDate(): Date {
    return this.date;
  }

  getFilePath(): string {
    return this.filePath;
  }
}
