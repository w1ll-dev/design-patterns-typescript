import { ImageEditorConcreteMemento } from './image-editor-concrete-memento';
import { ImageEditorMemento } from './image-editor-memento';

type AcceptFormats = 'jpg' | 'png' | 'gif';

export class ImageEditor {
  constructor(private filePath: string) {}

  convertFormatTo(format: AcceptFormats): void {
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += `.${format}`;
  }

  save(): Readonly<ImageEditorMemento> {
    const date = new Date();
    return new ImageEditorConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
    );
  }

  restore(memento: ImageEditorMemento): void {
    const concreteMemento = memento as ImageEditorConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
  }
}
