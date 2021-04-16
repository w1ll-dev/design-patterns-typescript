import { ImageEditor } from './image-editor';
import { ImageEditorBackupMenager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/home/files/will.png');
const backUpManager = new ImageEditorBackupMenager(imageEditor);

backUpManager.backUp();
imageEditor.convertFormatTo('gif');

backUpManager.backUp();
imageEditor.convertFormatTo('jpg');

backUpManager.restore();
backUpManager.restore();

console.log(imageEditor);
